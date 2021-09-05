import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddRecipeFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'
import { createPost } from '../../services/postRequests'

const AddPostForm = () => {
  const [form, onChange, clear] = useForm({ title: "", body: "" })
  const [isLoading, setIsLoading] = useState(false)
  

  const onSubmitForm = (event) => {
    event.preventDefault()
    createPost(form, clear, setIsLoading)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <AddRecipeFormContainer>
        <InputsContainer>
          <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            name={"body"}
            value={form.body}
            onChange={onChange}
            label={'Postagem'}
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
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Postar</>}
        </Button>
      </AddRecipeFormContainer>
    </form>
  )
}

export default AddPostForm