import AppLetras from './components/AppLetras'
import { LetrasProvider } from './context/Letras'


function App() {

  return (
    <LetrasProvider>
        <AppLetras />
    </LetrasProvider>
  )
}

export default App
