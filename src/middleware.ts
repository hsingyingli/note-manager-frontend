import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const requireNotLoginPath = ['/login', '/register']
const refreshTokenName = process.env.REFRESH_TOKEN || ''
const accessTokenName = process.env.ACCESS_TOKEN || ''

export async function middleware(request: NextRequest) {
  const hasAuthentication = request.cookies.has(accessTokenName) || request.cookies.has(refreshTokenName)
  if (hasAuthentication && requireNotLoginPath.includes( request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}
