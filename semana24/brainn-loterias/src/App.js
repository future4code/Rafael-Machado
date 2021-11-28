import Menu from "./components/Menu/Menu"
import { BrowserRouter } from 'react-router-dom'
import Router from "./routes/Router"
import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "./constants/urls"

const App = () => {
  const [loterias, setLoterias] = useState([])
  // console.log("RENDERIZOU APP", loterias)

  const getLoterias = () => {
    axios
      .get(`${BASE_URL}/loterias`)

      .then((res) => {
        setLoterias(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  useEffect(() => {
    getLoterias()
  }, [])




  return (
    <BrowserRouter>
      <Menu data={loterias}/>
      <Router />
    </BrowserRouter>
  )
}

export default App

