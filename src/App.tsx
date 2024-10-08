import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeMain from "./Pages/HomeMain"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"
const App = () => {
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <HomeMain />,
      children:[
        {
          path:"",
          element:<Home />
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/portfolio",
          element:<Portfolio />
        },
        {
          path:"/contact",
          element:<Contact />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App