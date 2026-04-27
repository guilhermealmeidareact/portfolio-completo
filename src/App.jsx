import Contato from "./components/Contato";
import Habilidades from "./components/Habilidades";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";

function App() {
  return (
    <div>
     <Header />
     <Hero />
     <Sobre />
     <Habilidades />
     <Projetos />
     <Contato />
    </div>
  )
}

export default App;