
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'


const OlvidePassword = () => {

  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '' || email.length < 6) {
      setAlerta({
        msg: 'El Email es obligatorio',
        error: true
      });
      return
    }

    try {
      
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, { email })

      setAlerta({
        msg: data.msg,
        error: false
      })

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }


  }



  const { msg } = alerta

  return (
    <>
      <h1 className="text-sky-600 p-2 font-black text-4xl md:text-6xl capitalize">Recupera Tu Acceso Y No Pierdas Tus <span className="text-slate-700 ">proyectos</span> </h1>

      {msg && <Alerta alerta={alerta} />}

      <form
        onSubmit={handleSubmit}
        className="my-10 bg-white shadow rounded-lg px-10 py-5">
        <div>
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor='email'
          >
            Email
          </label>
          <input
            id='email'
            type="email"
            placeholder='Enviar Instrucciones'
            className="w-full my-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Enviar Instrucciones"
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded-md hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />

      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-4 text-slate-500 uppercase text-sm"
          to="/"
        >¿Ya tienes una cuneta? Inicia Session</Link>
        <Link
          className="block text-center my-4 text-slate-500 uppercase text-sm"
          to="/olvide-password"
        >No Tienes una cuenta Registrate</Link>
      </nav>
    </>
  )
}

export default OlvidePassword