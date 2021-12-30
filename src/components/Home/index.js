// Write your code here
import {HomeContainer, MobileViewCon, DesktopViewCon} from './styledComponents'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <HomeContainer>
      <MobileViewCon
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <DesktopViewCon
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </HomeContainer>
  </>
)
export default Home
