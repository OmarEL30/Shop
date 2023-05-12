import './Header.css';

import logo from '../../assets/icon/logo.svg'
import { FaUserAlt } from "react-icons/fa";
const Header  =() => {
    return(
    <div className="logo-Bar">
      <img src={logo} className="App-Logo" alt="Logo"/>
      <p className="logo-text">Minimal <span>Shop</span>ping</p>
      <a className="user-logo" href="#"><FaUserAlt/></a>
    </div>
    )
}
export default Header