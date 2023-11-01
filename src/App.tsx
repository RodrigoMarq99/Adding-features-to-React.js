import Card from "./components/card/Card"
import Contador from "./components/contador/Contador"
import Tarefa from "./components/tarefa/Tarefa"
import Home from "./pages/home/Home"

function App() {
    return (
        <>
        <Card titulo='Anime' descricao='Dragon Ball' />
        <Card titulo='Anime' descricao='Naruto' />
        <Contador />
        <Tarefa />
        <br></br>
        <Home />
        </>
    )
}

export default App