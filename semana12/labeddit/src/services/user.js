import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToPostList } from "../routes/coordinator"

export const login = (body, clear, history, setRightButtonText) => {
    // O Body vem do form que salva no estado email e password
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostList(history)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        // console.log("LOGIN ERRO", err.response.data.errors)
        alert("Erro ao fazer Login", err.response.data.errors)
    })
}   

export const signUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostList(history)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        alert("Erro no Cadastro", err.response.data.errors)
    })
}

