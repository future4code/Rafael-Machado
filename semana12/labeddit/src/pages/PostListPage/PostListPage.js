import Button from '@material-ui/core/Button'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostListPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1> Post List Page </h1>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    )
}

export default PostListPage