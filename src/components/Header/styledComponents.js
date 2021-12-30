// Style your elements here
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  box-shadow: 0px 0px 0px 1px #dcdcdc;
`
export const HeaderLogo = styled.img`
  width: 30px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 50px;
  }
`
export const HambergerBtn = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const CloseBtn = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  align-self: flex-end;
  border: none;
`
export const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  flex-grow: 1;
  width: 90%;
`
export const NavlinkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px;
  flex-grow: 1;
`
export const NavLinkitem = styled.li`
  list-style-type: none;
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #1e293b;
`

export const NavContenttext = styled.p`
  margin-left: 5px;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: #616e7c;
`
