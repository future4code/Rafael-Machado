import { PostCardContainer } from "./styled"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { goToDetails } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const PostCard = (props) => {
    const history = useHistory()
    // console.log(props)

    const handleUpVote = () => {
        props.handleVotePost(props.postID, 1)
        // console.log("POST ID", props.postID)
      }

    const onClickCard = (id) => {
        goToDetails(history, id)
      }

    
    return (
        <PostCardContainer onClick={props.onClick}>

                <Typography align={'center'} variant="h6">
                {props.name}
               
                </Typography>

                {/* <Typography align={'center'}>
                <p>Titulo</p>{props.title}
                </Typography> */}

                <Typography align={'center'}>
                <p>Postagem</p>{props.postText}
                </Typography>


                {/* Post Footer */}

                <Button
                color={'primary'}
                variant={'contained'}
                onClick={handleUpVote}
                
            >
                +
            </Button>

                <Typography align={'center'}>
                <p>Votos</p>{props.votes}
                </Typography>

                <Typography align={'center'}>
                <p>Comentários</p>{props.comments}
                </Typography>

                <Button
                color={'primary'}
                variant={'contained'}
                onClick={() => onClickCard(props.postID)}
                
            >
                Detalhes
            </Button>
    
        </PostCardContainer>
    )
}

export default PostCard