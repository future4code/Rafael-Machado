import { useParams } from "react-router-dom"
import PostCard from "../../components/PostCard/PostCard"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"


const PostDetailsPage = () => {
    useProtectedPage()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const params = useParams()
    console.log("PARAMS ID", params)
    console.log("LISTA DE POSTS", posts)

    const newPost = posts.filter((post) => {

        return post.id === params.id
    })

    const eachPost = newPost.map((post) => {
        return <PostCard
        key={post.id}
        name={post.username}
        postText={post.body}
        votes={post.voteSum}
        comments={post.commentCount}
        // onClick={() => onClickCard(post.id)}
        />
    })


    console.log(eachPost)
    return (
        <div>
            <h1> Post Details Page </h1>
            {eachPost}
        </div>
    )
}

export default PostDetailsPage