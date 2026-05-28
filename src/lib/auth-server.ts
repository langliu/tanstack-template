import { createServerFn } from '@tanstack/react-start'

export const getServerSession = createServerFn({ method: 'GET' }).handler(async () => {
  const [{ getRequestHeaders }, { auth }] = await Promise.all([
    import('@tanstack/react-start/server'),
    import('#/lib/auth'),
  ])

  const requestHeaders = getRequestHeaders()

  if (!requestHeaders) {
    return null
  }

  return auth.api.getSession({
    headers: requestHeaders,
  })
})
