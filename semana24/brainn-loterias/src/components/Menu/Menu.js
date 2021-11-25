import { useHistory } from "react-router"


const Menu = ({data}) => {
  const history = useHistory()

  const onChange = (event) => {
    history.push(event.target.value)
    
  }

  // console.log("ID DA LOTERIA", data[1] && data[1].id)



  return <div> 
    
    <select onChange={onChange}>
      <option value={"/"}> {data[0] && data[0].nome} </option>
      <option value={"/quina"}> {data[1] && data[1].nome} </option>
      </select> 
      
      </div>
}

export default Menu
