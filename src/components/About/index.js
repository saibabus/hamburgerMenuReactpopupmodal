// Write your code here
// Write your code here
import {AboutContainer, MobileViewCon, DesktopViewCon} from './styledComponents'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <AboutContainer>
      <MobileViewCon
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
      <DesktopViewCon
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </AboutContainer>
  </>
)
export default About
