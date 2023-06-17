import {Link} from 'react-router-dom'

const NavBar = () =>{
    return(
        <ul>
            <li><Link to = '/favorite'>favorite</Link></li>
            <li><Link to = '/quote-generator'>generate</Link></li>
        </ul>
    )
}

export default NavBar;