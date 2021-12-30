// Write your code here
import {
  NotfoundContainer,
  Heading,
  Description,
  NotfounImage,
} from './styledComponents'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <NotfoundContainer>
      <NotfounImage
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <Heading>Lost Your Way?</Heading>
      <Description>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </Description>
    </NotfoundContainer>
  </>
)
export default NotFound
