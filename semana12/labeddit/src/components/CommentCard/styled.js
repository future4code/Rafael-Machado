import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const CommentCardContainer = styled(Typography)`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: 300px;
    width: 300px;
    margin: 10px;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    color: grey;

    &:hover {
    box-shadow: rgba(0, 0, 0) 0px 13px 27px -5px, rgba(0, 0, 0) 0px 8px 16px -8px;
    color: black; 
    }
`

