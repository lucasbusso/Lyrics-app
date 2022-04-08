import { useState } from 'react'

const Formulario = () => {
    const [ busqueda, setBusqueda] = useState({
        artista:'',
        cancion:''
    })
  return (
    <form>
        <legend>Busca tu artista o tu canción</legend>

        <div className='form-grid'>
            <div>
                <label htmlFor="">Artista</label>
                <input 
                    type="text" 
                    name="artista" 
                    placeholder='busca tu artista'
                    value={busqueda.artista}
                    onChange= {e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value 
                    })}/>
            </div>
             <div>
                <label htmlFor="">Canción</label>
                <input 
                    type="text" 
                    name="cancion" 
                    placeholder='busca tu canción'
                    value={busqueda.cancion}
                    onChange= {e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value 
                    })}/>
            </div>
            <input 
                type="submit"
                value="buscar" />
        </div>
    </form>
  )
}

export default Formulario