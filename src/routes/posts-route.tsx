import { postsQueryOptions } from "@/api/posts"
import { rootRoute } from "@/main"
import { Post } from "@/pages/post"
import Posts from "@/pages/posts"
import { Route } from "@tanstack/react-router"

const PostRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/posts',
  component: Posts,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOptions),
})
const PostByIdRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/posts/$id',
  component: Post,
})

export {
  PostRoute, PostByIdRoute
} 