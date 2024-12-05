// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  Heading,
  Slogan,
  ReactHooksImage,
  Desc,
  ReadMoreBtn,
} from './styledComponents.js'

const ReadMore = props => {
  const [readMore, setReadDesc] = useState(false)
  const {reactHooksDescription} = props
  const slicedText = reactHooksDescription.slice(0, 170)

  const clickReadMoreReadLessBtn = () => {
    setReadDesc(prevState => !prevState)
  }

  return (
    <AppContainer>
      <Heading>React Hooks</Heading>
      <Slogan>Hooks are a new addition to React</Slogan>
      <ReactHooksImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      ></ReactHooksImage>
      <Desc>{readMore ? reactHooksDescription : slicedText}</Desc>
      <ReadMoreBtn onClick={clickReadMoreReadLessBtn}>
        {readMore ? 'Read Less' : 'Read More'}
      </ReadMoreBtn>
    </AppContainer>
  )
}

export default ReadMore
