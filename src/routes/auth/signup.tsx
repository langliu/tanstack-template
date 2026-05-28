import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

import { SignupForm } from '#/components/signup-form.tsx'

const redirectSchema = z
  .string()
  .optional()
  .catch(undefined)
  .transform((value) => (value?.startsWith('/') && !value.startsWith('//') ? value : undefined))

const signupSearchSchema = z.object({
  redirect: redirectSchema,
})

export const Route = createFileRoute('/auth/signup')({
  validateSearch: signupSearchSchema,
  component: SignupRoute,
})

function SignupRoute() {
  const search = Route.useSearch()

  return (
    <main className='flex min-h-screen items-center justify-center px-4 py-12'>
      <SignupForm redirect={search.redirect} className='w-full max-w-3xl' />
    </main>
  )
}
