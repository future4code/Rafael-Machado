// import Button from '@material-ui/core/Button'
import PostCard from '../../components/PostCard/PostCard'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { PostListContainer } from './styled'

const PostListPage = () => {
    useProtectedPage()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    // console.log(posts)

    const eachPost = posts.map((post) => {
        return <PostCard
        key={post.id}
        name={post.username}
        postText={post.body}
        votes={post.voteSum}
        comments={post.commentCount}
        onClick={() => null}
        />
    })
    
    return (
        <PostListContainer>
            
            {eachPost}
        </PostListContainer>
    )
}

export default PostListPage