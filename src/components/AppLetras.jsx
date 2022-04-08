import Formulario from './Formulario'
import Alerta from './Alerta'
import Letra from './Letra'
import useLetras from '../hooks/useLetras'
import Spinner from './Spinner'

const AppLetras = () => {
    const { alerta, letra, cargando } = useLetras()
  return (
    <>
        <header>Buscá la letra de tus canciones</header>
        <Formulario />
        <main>
            {alerta ? <Alerta>{alerta}</Alerta> : letra ? <Letra /> : cargando ? <Spinner /> : <p className='text-center'>Busca la letra de tu canción favorita</p>} 
        </main>
    </>
  )
}

export default AppLetras