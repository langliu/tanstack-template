import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { getServerSession } from '#/lib/auth-server.ts'

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async ({ location }) => {
    const session = await getServerSession()

    if (!session) {
      throw redirect({
        to: '/auth/login',
        search: { redirect: location.href },
      })
    }
  },
  component: DashboardLayout,
})

function DashboardLayout() {
  return <Outlet />
}
