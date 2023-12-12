import { Post } from "@/pages/post"
import Posts from "@/pages/posts"
import { rootRoute } from "@/routes/root"
import { Route } from "@tanstack/react-router"

const PostRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/posts',
  component: Posts,
})
const PostByIdRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/posts/$id',
  component: Post,
})

export {
  PostRoute, PostByIdRoute
} 