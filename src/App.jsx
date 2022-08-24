import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { ProyectoProvider } from './context/ProyectosProvider'

import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import ConfirmarCuenta from './page/ConfirmarCuenta'
import Login from './page/Login'
import NuevoPassword from './page/NuevoPassword'
import NuevoProyecto from './page/NuevoProyecto'
import OlvidePassword from './page/OlvidePassword'
import Proyecto from './page/Proyecto'
import Proyectos from './page/Proyectos'
import Registrar from './page/Registrar'



function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectoProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />} >
              {/* index dice  que va cargar  */}
              <Route index element={<Login />} />
              <Route path='registrar' element={<Registrar />} />
              <Route path='olvide-password' element={<OlvidePassword />} />
              <Route path='olvide-password/:token' element={<NuevoPassword />} />
              <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
            </Route>

            <Route path='/proyectos' element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
              <Route path='crear-proyecto' element={<NuevoProyecto />} />
              <Route path=':id' element={<Proyecto />} />
            </Route>
          </Routes>
        </ProyectoProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
