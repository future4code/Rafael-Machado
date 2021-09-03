import { CommentCardContainer, StyledText } from "./styled"
import Typography from '@material-ui/core/Typography'


const CommentCard = (props) => {
    // console.log(props)
    return (
        <CommentCardContainer>

                <Typography align={'center'} variant="h6">
                {props.username}
               
                </Typography>

                {/* <Typography align={'center'}>
                <p>Titulo</p>{props.title}
                </Typography> */}

                <Typography align={'center'}>
                <p>Postagem</p>{props.commentText}
                </Typography>


                {/* Post Footer */}

                <Typography align={'center'}>
                <p>Votos</p>{props.votes}
                </Typography>
    
        </CommentCardContainer>
    )
}

export default CommentCard