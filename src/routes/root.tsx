import { Link, Outlet, RootRoute, Router } from '@tanstack/react-router'
import AboutRoute from './about'
import IndexRoute from './home'


export const rootRoute = new RootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
})

const routeTree = rootRoute.addChildren([IndexRoute, AboutRoute])
export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}