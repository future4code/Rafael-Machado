import Menu from "./components/Menu/Menu"
import { BrowserRouter } from 'react-router-dom'
import Router from "./routes/Router"


const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Router />
    </BrowserRouter>
  )
}

export default App

