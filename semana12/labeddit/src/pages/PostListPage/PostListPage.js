// import Button from '@material-ui/core/Button'
import PostCard from '../../components/PostCard/PostCard'
import AddPostForm from '../../components/PostForm/PostForm'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'

import { PostListContainer } from './styled'
import Loading from "../../components/Loading/Loading"
import axios from "axios"

const PostListPage = () => {
    useProtectedPage()
    
    const posts = useRequestData([], `${BASE_URL}/posts`)
    // console.log(posts)
    
    const handleVotePost = (postId, direction) => {

        const body = {
               direction: direction
            }
        
          axios.post(`${BASE_URL}/posts/${postId}/votes`, body, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          })
            .then((res) => {
              alert(res.data)
              
              
            })
            .catch((err) => {
              console.log("ERRO VOTE", err)
              
            })
        }
      

    const eachPost = posts.map((post) => {
        return <PostCard
        handleVotePost={handleVotePost}
        key={post.id}
        postID={post.id}
        name={post.username}
        postText={post.body}
        votes={post.voteSum}
        comments={post.commentCount}
        title={post.title}
        // onClick={() => onClickCard(post.id)}
        />
    })
   
    return (
        <PostListContainer>
            <AddPostForm />
            {eachPost.length > 0 ? eachPost : <Loading />}
        </PostListContainer>
    )
}

export default PostListPage