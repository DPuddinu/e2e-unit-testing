import { Route } from "@tanstack/react-router"
import { rootRoute } from "./root"
import { About } from "@/pages/about";

const AboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})
export default AboutRoute;