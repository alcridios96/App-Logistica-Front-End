import { Routes, Route } from 'react-router-dom';
import { Producto, Persona, Ruta, Servicio } from '../containers/Mantenedores';
import { ManejoDeServicios, ProgramacionDeTransporte } from '../containers/GestionDeServicios';
import { ContratosComerciales, Prefacturas, Facturas, Subastas } from '../containers/Comercial';
import { ContratosProveedores, PrefacturaProveedores } from '../containers/Proveedores';
import { Visualizar, Descargar } from '../containers/InformesAndReportes';
import { Home } from '../containers/Home';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      // mantenedores
      <Route path='/productos' element={<Producto />}></Route>
      <Route path='/personas' element={<Persona />}></Route>
      <Route path='/rutas' element={<Ruta />}></Route>
      <Route path='/servicios' element={<Servicio />}></Route>
      //Gestion de servicios
      <Route path='/manejo-de-servicios' element={<ManejoDeServicios />}></Route>
      <Route path='/programacion-de-transporte' element={<ProgramacionDeTransporte />}></Route>
      //Comercial
      <Route path='/contratos-comerciales' element={<ContratosComerciales />}></Route>
      <Route path='/prefacturas' element={<Prefacturas />}></Route>
      <Route path='/facturas' element={<Facturas />}></Route>
      <Route path='/subastas' element={<Subastas />}></Route>
      //Proveedores
      <Route path='/contratos-proveedores' element={<ContratosProveedores />}></Route>
      <Route path='/prefacturas-proveedores' element={<PrefacturaProveedores />}></Route>
      //Informes y Reportes
      <Route path='/visualizar' element={<Visualizar />}></Route>
      <Route path='/descargar' element={<Descargar />}></Route>
      //adicionales
      <Route path='*' element={<h1>404</h1>}></Route>
    </Routes>
  )
}

export default Router;