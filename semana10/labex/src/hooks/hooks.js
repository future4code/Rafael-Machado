import { useEffect } from "react"
import { useHistory } from "react-router-dom"

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === "null" || token === null) {
            history.push("/login")
        }
    }, [history])
}