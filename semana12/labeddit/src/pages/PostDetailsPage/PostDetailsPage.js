import { useParams, useHistory } from "react-router-dom"
import CommentCard from "../../components/CommentCard/CommentCard"
import PostCard from "../../components/PostCard/PostCard"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import Button from '@material-ui/core/Button'
import { PostDetailsContainer } from './styled'
import { goToPostList } from '../../routes/coordinator'


const PostDetailsPage = () => {
    useProtectedPage()
    const history = useHistory()

    const posts = useRequestData([], `${BASE_URL}/posts`)
    const params = useParams()

    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log("PARAMS ID", params.id)
    // console.log("LISTA DE POSTS", posts)
    console.log("COMENTÁRIOS", comments)

    const newPost = posts && posts.filter((post) => {

        return post.id === params.id
    })

    
    const eachPost = newPost && newPost.map((post) => {
        return <PostCard
        key={post.id}
        name={post.username}
        postText={post.body}
        votes={post.voteSum}
        comments={post.commentCount}
        />
    })

    const eachComment = comments && comments.map((comment) => {
        return <CommentCard
        key={comment.id}
        username={comment.username}
        commentText={comment.body}
        votes={comment.voteSum}
        />
    })

    return (
        <PostDetailsContainer>

            <h2> Detalhe do Post </h2>
            {eachPost}
            <h2> Comentários </h2>
            {eachComment}
            <Button
                color={'primary'}
                variant={'contained'}
                onClick={() => goToPostList(history)}
                
            >
                Voltar para Home
            </Button>
            
        </PostDetailsContainer>
    )
}

export default PostDetailsPage