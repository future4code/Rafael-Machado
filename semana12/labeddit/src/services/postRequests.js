import axios from "axios"
import { BASE_URL } from '../constants/urls'

export const createPost = (body, clear, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        alert(res.data)
        clear()
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }


  export const createComment = (body, clear, setIsLoading, id) => {
    
    setIsLoading(true)
      axios.post(`${BASE_URL}/posts/${id.postID}/comments`, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
        .then((res) => {
          alert(res.data)
          clear()
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
        })
    }

