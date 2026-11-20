import { createBrowserRouter } from "react-router"
import Root from "./Root"
import Home from "./pages/Home"
import ProductionProcess from "./pages/ProductionProcess"
import FarmToCup from "./pages/FarmToCup"
import FarmToDrying from "./pages/FarmToDrying"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "production-process", Component: ProductionProcess },
      { path: "farm-to-cup", Component: FarmToCup },
      { path: "farm-to-drying", Component: FarmToDrying },
    ],
  },
])
