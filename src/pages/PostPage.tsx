import { useLocation } from 'react-router-dom'
import { OrangeText, Profile } from '../assets/Common.style'
import PostForm from '../containers/PostForm'

const PostPage = () => {
  const location = useLocation().pathname.split("/")[useLocation().pathname.split("/").length - 1]
  return (
    <Profile>
      <p className='title'>{location === "myquote" ? <>Are you feeling <OrangeText>inspired?</OrangeText></> : <>Edit your <OrangeText>quote.</OrangeText></>}</p>
      <PostForm/>
    </Profile>
  )
}

export default PostPage