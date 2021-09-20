import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddRecipeFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'
import { createComment } from '../../services/postRequests'

const AddCommentForm = (props) => {
  const [form, onChange, clear] = useForm({ body: "" })
  const [isLoading, setIsLoading] = useState(false)
    // console.log("ADD POST", form)

  const postID = props

  const onSubmitForm = (event) => {
    event.preventDefault()
    createComment(form, clear, setIsLoading, postID)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <AddRecipeFormContainer>
        <InputsContainer>
          <TextField
            name={"body"}
            value={form.body}
            onChange={onChange}
            label={'Digite seu Comentário'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Postar Comentário</>}
        </Button>
      </AddRecipeFormContainer>
    </form>
  )
}

export default AddCommentForm