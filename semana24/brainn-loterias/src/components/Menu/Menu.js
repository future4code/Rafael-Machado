import { useHistory } from "react-router"


const Menu = () => {
  const history = useHistory()

  const onChange = (event) => {
    history.push(event.target.value)
  }

  return <div> 
    
    <select onChange={onChange}>
      <option value={"/"} selected> Megasena </option>
      <option value={"/quina"}> Quina </option>
      </select> 
      
      </div>
}

export default Menu
