// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {
  NavContainer,
  NavContenttext,
  NavLink,
  NavLinkitem,
  NavlinkList,
  ModelContainer,
  CloseBtn,
  HambergerBtn,
  HeaderLogo,
} from './styledComponents'
import './index.css'

const Header = () => (
  <NavContainer>
    <Link to="/">
      <HeaderLogo
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <HambergerBtn data-testid="hamburgerIconButton">
          <GiHamburgerMenu size="32" />
        </HambergerBtn>
      }
      className="popup-content"
    >
      {close => (
        <ModelContainer>
          <CloseBtn
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size="30" />
          </CloseBtn>
          <NavlinkList>
            <NavLinkitem>
              <NavLink to="/" onClick={() => close()}>
                <AiFillHome size="32" />
                <NavContenttext>Home</NavContenttext>
              </NavLink>
            </NavLinkitem>
            <NavLinkitem>
              <NavLink to="/about" onClick={() => close()}>
                <BsInfoCircleFill size="32" />
                <NavContenttext>About</NavContenttext>
              </NavLink>
            </NavLinkitem>
          </NavlinkList>
        </ModelContainer>
      )}
    </Popup>
  </NavContainer>
)
export default Header
