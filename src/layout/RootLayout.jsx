import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <>
    <header>
        <nav className="App">
            <h1>My articls</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer></footer>
    </>
  )
}

export default RootLayout