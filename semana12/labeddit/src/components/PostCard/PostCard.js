import { PostCardContainer } from "./styled"
import Typography from '@material-ui/core/Typography'


const PostCard = (props) => {

    return (
        <PostCardContainer onClick={props.onClick}>

                <Typography align={'center'} variant="h6">
                {props.name}
                {/* {props.name.toUpperCase()} */}
                </Typography>
                
                <Typography align={'center'}>
                {props.postText}
                </Typography>

                {/* Post Footer */}

                <Typography align={'center'}>
                <p>Votos</p>{props.votes}
                </Typography>

                <Typography align={'center'}>
                <p>Comentários</p>{props.comments}
                </Typography>
    
        </PostCardContainer>
    )
}

export default PostCard