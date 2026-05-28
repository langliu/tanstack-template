import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

import { LoginForm } from '#/components/login-form.tsx'

const redirectSchema = z
  .string()
  .optional()
  .catch(undefined)
  .transform((value) => (value?.startsWith('/') && !value.startsWith('//') ? value : undefined))

const loginSearchSchema = z.object({
  redirect: redirectSchema,
})

export const Route = createFileRoute('/auth/login')({
  validateSearch: loginSearchSchema,
  component: LoginRoute,
})

function LoginRoute() {
  const search = Route.useSearch()

  return (
    <main className='flex min-h-screen items-center justify-center px-4 py-12'>
      <LoginForm redirect={search.redirect} className='w-full max-w-3xl' />
    </main>
  )
}
