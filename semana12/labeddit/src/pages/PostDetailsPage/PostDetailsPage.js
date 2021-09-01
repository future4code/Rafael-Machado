import useProtectedPage from "../../hooks/useProtectedPage"


const PostDetailsPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1> Post Details Page </h1>
        </div>
    )
}

export default PostDetailsPage