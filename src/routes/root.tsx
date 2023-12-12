import { Link, Outlet, RootRoute, Router } from '@tanstack/react-router'
import AboutRoute from './about'
import IndexRoute from './home'
import {PostByIdRoute, PostRoute} from './posts'


export const rootRoute = new RootRoute({
  component: () => (
    <div className='h-full flex flex-col'>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/posts" className="[&.active]:font-bold">
          Posts
        </Link>
      </div>
      <hr />
      <div className='p-2 grow'>
        <Outlet />
      </div>
    </div>
  ),
})

const routeTree = rootRoute.addChildren([IndexRoute, AboutRoute, PostByIdRoute, PostRoute ])
export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}