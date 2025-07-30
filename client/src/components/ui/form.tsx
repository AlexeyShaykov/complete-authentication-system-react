/**
 * This file contains a set of reusable React components and hooks for building
 * forms using `react-hook-form` and `@radix-ui` primitives. The components are
 * designed to provide a consistent structure and styling for form elements,
 * including labels, controls, descriptions, and error messages.
 *
 * Components:
 * - `Form`: A wrapper around `FormProvider` from `react-hook-form` to provide
 *   form context to child components.
 * - `FormField`: A component that wraps a `Controller` from `react-hook-form`
 *   and provides context for the field's name.
 * - `FormItem`: A container for form elements, providing a unique ID for
 *   accessibility purposes.
 * - `FormLabel`: A label component that associates with a form control and
 *   displays error styling if validation fails.
 * - `FormControl`: A wrapper for form controls that handles accessibility
 *   attributes like `aria-describedby` and `aria-invalid`.
 * - `FormDescription`: A component for displaying additional information about
 *   a form field.
 * - `FormMessage`: A component for displaying validation error messages.
 *
 * Hook:
 * - `useFormField`: A custom hook to access the current form field's context,
 *   including its name, IDs for accessibility, and validation state.
 *
 * Utility:
 * - `cn`: A utility function for conditionally combining class names.
 *
 * Dependencies:
 * - `react-hook-form`: Provides form state management and validation.
 * - `@radix-ui/react-label` and `@radix-ui/react-slot`: Used for building
 *   accessible and composable UI components.
 * - `@/lib/utils`: Contains the `cn` utility function for class name
 *   manipulation.
 *
 * Usage:
 * These components can be composed together to build accessible and
 * customizable forms with validation and error handling.
 */
import {
  createContext, useContext, useId, useMemo, type ComponentProps,
} from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import cn from '@/lib/utils';

import Label from './label';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
  }: ControllerProps<TFieldValues, TName>) => {
  const contextValue = useMemo(() => ({ name: props.name }), [props.name]);

  return (
    <FormFieldContext.Provider value={contextValue}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

type FormItemContextValue = {
  id: string
}

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormItem = ({
  className,
  ...props
}: ComponentProps<'div'>) => {
  const id = useId();

  const contextValue = useMemo(() => ({ id }), [id]);

  return (
    <FormItemContext.Provider value={contextValue}>
      <div
        data-slot="form-item"
        className={cn('grid gap-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
};

const FormLabel = ({
  className,
  ...props
}: ComponentProps<typeof LabelPrimitive.Root>) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn('data-[error=true]:text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};

const FormControl = ({
  ...props
}: ComponentProps<typeof Slot>) => {
  const {
    error, formItemId, formDescriptionId, formMessageId,
  } = useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};

const FormDescription = ({
  className,
  ...props
}: ComponentProps<'p'>) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
};

const FormMessage = ({
  className,
  ...props
}: ComponentProps<'p'>) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? '') : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn('text-destructive text-sm', className)}
      {...props}
    >
      {body}
    </p>
  );
};

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};
