// import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import PostCard from '../../components/PostCard/PostCard'
import AddPostForm from '../../components/PostForm/PostForm'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToDetails } from '../../routes/coordinator'
import { PostListContainer } from './styled'

const PostListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    
    // console.log(posts)

    const onClickCard = (id) => {
        goToDetails(history, id)
    }

    const eachPost = posts.map((post) => {
        return <PostCard
        key={post.id}
        name={post.username}
        postText={post.body}
        votes={post.voteSum}
        comments={post.commentCount}
        title={post.title}
        onClick={() => onClickCard(post.id)}
        />
    })
    
    return (
        <PostListContainer>
            <AddPostForm />
            {eachPost}
        </PostListContainer>
    )
}

export default PostListPage