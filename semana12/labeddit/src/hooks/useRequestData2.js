import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestDataX = (initialData, url) => {
  const [data, setData] = useState(initialData)

  const getData = () => {
    axios.get(url , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log("ERRO", error.data)
        alert('Ocorreu um erro, tente novamente')
      })
  }
  
  useEffect(() => {
    getData()
  }, [url])
  

  return [data, getData]
}

export default useRequestDataX