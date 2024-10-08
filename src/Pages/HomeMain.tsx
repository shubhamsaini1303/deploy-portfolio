import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "./Footer"

const HomeMain = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default HomeMain