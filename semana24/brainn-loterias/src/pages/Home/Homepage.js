import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"

const Homepage = () => {

    const [loterias, setLoterias] = useState ([])
    console.log(loterias)
    // const [relacaoConcursos, setRelacaoConcursos] = useState ([])
    // const [concursos, setConcursos] = useState ([])

    const getLoterias = () => {
        axios.get(`${BASE_URL}/loterias`)

        .then ((res) => {
           
            setLoterias(res.data)
        })
        .catch ((error) => {
            console.log(error)
        })
    }

    

    useEffect(() => {
        getLoterias()
    }, [])

    return (
        <div>
            HOME - PAGE
        </div>
    )
}

export default Homepage
