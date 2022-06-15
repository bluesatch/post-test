import NavBar from "./Navbar"

const Header =()=> {
    return (
        <header>
            <div className="row">
                <div className="col-md-5">
                    <h1>Users</h1>
                </div>
                <div className="col-md-7">
                    <NavBar />
                </div>
            </div>
        </header>
    )
}

export default Header