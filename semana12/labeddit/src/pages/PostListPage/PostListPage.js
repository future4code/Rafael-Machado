// import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import PostCard from '../../components/PostCard/PostCard'
import AddPostForm from '../../components/PostForm/PostForm'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToDetails } from '../../routes/coordinator'
import { PostListContainer } from './styled'
import Loading from "../../components/Loading/Loading"

const PostListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    
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
   // TESTE LOADING 
    return (
        <PostListContainer>
            <AddPostForm />
            {eachPost.length > 0 ? eachPost : <Loading />}
        </PostListContainer>
    )
}

export default PostListPage