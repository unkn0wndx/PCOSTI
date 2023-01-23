import { useContext } from "react"
import { AuthContext } from "../../auth"
import { NavbarComponent } from "../../ui"
import StickyFooter from "../../ui/components/StickyFooter"
import { Admin } from "../pages/Admin"

export const MainRoutes = () => {

  // const { user } = useContext(AuthContext)

  return (
    <>
      <NavbarComponent />
      <div className="container">
        <Admin />
      </div>
      <StickyFooter />
    </>
  )
}
