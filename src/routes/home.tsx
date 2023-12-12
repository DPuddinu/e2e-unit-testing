import { HomePage } from "@/pages/home"
import { rootRoute } from "@/routes/root"
import { Route } from "@tanstack/react-router"

const IndexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

export default IndexRoute