import { useHistory } from "react-router"
import { DropdownSelect, GeneralContainer } from "./Menu.styles"



const Menu = ({data}) => {
  const history = useHistory()

  const onChange = (event) => {
    history.push(event.target.value)
    
  }

  // console.log("ID DA LOTERIA", data[1] && data[1].id)



  return <GeneralContainer> 
    <label>
    <DropdownSelect onChange={onChange}>
      <option value={"/"}> {data[0] && data[0].nome.toUpperCase()} </option>
      <option value={"/quina"}> {data[1] && data[1].nome.toUpperCase()} </option>
      </DropdownSelect> 
      </label>
      
      </GeneralContainer>
}

export default Menu
