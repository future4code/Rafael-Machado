import { useHistory } from "react-router-dom"


const ApplicationFormPage = () => {
    const history = useHistory()

    


    return (
        <div>
            <p>ApplicationFormPage - Inscrever-se para uma Viagem Espacial</p>
            <form action="/pagina-processa-dados-do-form" method="post">
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" />
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label for="msg">Mensagem:</label>
                    <textarea id="msg"></textarea>
                </div>
            </form>
            <button onClick={history.goBack}> Voltar </button>
            <button> Enviar </button>
        </div>

    )
}
 
export default ApplicationFormPage
