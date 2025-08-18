/* eslint-disable import/prefer-default-export */

import { createFileRoute } from '@tanstack/react-router';

import ChangeEmailForm from '@/components/ChangeEmailForm';

const RouteComponent = () => <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto"><ChangeEmailForm /></div>;

export const Route = createFileRoute('/auth/change-email')({
  component: RouteComponent,
});
