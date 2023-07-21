import { NavLink, Outlet } from "react-router-dom"
import BreadCrumps from "../components/BreadCrumps"

const RootLayout = () => {
  return (
    <>
    <header>
        <nav className="App">
            <h1>My articls</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to='/articles'>Articles</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </header>
    <main className="App">
        <BreadCrumps/>
        <Outlet/>
    </main>
    <footer></footer>
    </>
  )
}

export default RootLayout