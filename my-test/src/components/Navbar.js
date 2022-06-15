import {NavLink} from 'react-router-dom'

const NavBar =()=> {
    return( 
        <nav className="nav navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>My Users</NavLink>
            <NavLink to='/createAccount'>Create Account</NavLink>
        </nav>
    )
}

export default NavBar