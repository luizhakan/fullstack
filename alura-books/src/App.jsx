import Header from './components/Header'
import Pesquisa from './components/Pesquisa'
import UltimosLancamentos from './components/UltimosLancamentos'

function App() {

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-700 to-blue-400">

      <Header />

      <Pesquisa />

      <UltimosLancamentos />

    </div>
  );
}

export default App