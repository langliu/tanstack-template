import { createFileRoute } from '@tanstack/react-router'

import { LoginForm } from '#/components/login-form.tsx'

export const Route = createFileRoute('/auth/login')({
  component: LoginRoute,
})

function LoginRoute() {
  return (
    <main className='flex min-h-screen items-center justify-center px-4 py-12'>
      <LoginForm className='w-full max-w-3xl' />
    </main>
  )
}
