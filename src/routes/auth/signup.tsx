import { createFileRoute } from '@tanstack/react-router'

import { SignupForm } from '#/components/signup-form.tsx'

export const Route = createFileRoute('/auth/signup')({
  component: SignupRoute,
})

function SignupRoute() {
  return (
    <main className='flex min-h-screen items-center justify-center px-4 py-12'>
      <SignupForm className='w-full max-w-3xl' />
    </main>
  )
}
