import { useState } from 'react'
import useLetras from '../hooks/useLetras'
import LetrasContext from '../context/LetrasProvider'

const Formulario = () => {
    const { setAlerta, busquedaLetra } = useLetras()
    const [ busqueda, setBusqueda] = useState({
        artista:'',
        cancion:''
    })
    const handleSubmit = e => {
        e.preventDefault()
         
        if(Object.values(busqueda).includes('')){
            setAlerta('Completa los campos')
            return
        }
        busquedaLetra(busqueda)
        setAlerta('')
    }
  return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Busca tu artista o tu canción</legend>

        <div className='form-grid'>
            <div>
                <label>Artista</label>
                <input 
                    type="text" 
                    name="artista" 
                    placeholder='Escribe tu artista'
                    value={busqueda.artista}
                    onChange= {e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value 
                    })}/>
            </div>
             <div>
                <label>Canción</label>
                <input 
                    type="text" 
                    name="cancion" 
                    placeholder='Escribe tu canción'
                    value={busqueda.cancion}
                    onChange= {e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value 
                    })}/>
            </div>
            <input 
                type="submit"
                value="Buscar" />
        </div>
    </form>
  )
}

export default Formulario