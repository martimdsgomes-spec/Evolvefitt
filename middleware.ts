import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Interceptar requisições problemáticas e retornar resposta vazia
  const url = request.nextUrl.pathname;
  
  // Bloquear requisições para URLs undefined ou malformadas
  if (url.includes('undefined') || url === '/undefined') {
    return new NextResponse(null, { status: 404 });
  }
  
  // Bloquear requisições problemáticas do Next.js
  if (url.includes('__nextjs_original-stack-frames')) {
    return new NextResponse(null, { status: 200 });
  }
  
  // Permitir todas as outras requisições
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};