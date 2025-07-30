/* eslint-disable import/prefer-default-export */
import { createFileRoute } from '@tanstack/react-router';
import SignInForm from '@/components/SignInForm';

const RouteComponent = () => (
  <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto">
    <SignInForm />
  </div>
);

export const Route = createFileRoute('/auth/signin')({
  component: RouteComponent,
});
