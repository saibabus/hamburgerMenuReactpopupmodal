// Style your elements here
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`
export const MobileViewCon = styled.img`
  width: 70%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const DesktopViewCon = styled.img`
  width: 70%;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
