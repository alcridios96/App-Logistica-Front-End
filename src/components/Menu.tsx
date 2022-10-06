import { Navbar, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
  //Este menu utiliza react-bootstrap
  const Mantenedores = () => {
    return (
      <NavDropdown title="Mantenedores" id="navbarScrollingDropdown">
        <NavDropdown.Item as={Link} to="/productos">Productos</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/personas">Personas</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/rutas">Rutas</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/servicios">Servicios</NavDropdown.Item>
      </NavDropdown>
    )
  }

  const GestionDeServicios = () => {
    return (
      <NavDropdown title="Gestion de Servicios" id="navbarScrollingDropdown">
        <NavDropdown.Item as={Link} to="/manejo-de-servicios">Manejo de Servicios</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/programacion-de-transporte">Programacion de Transporte</NavDropdown.Item>
      </NavDropdown>
    )
  }

  const Comercial = () => {
    return (
      <NavDropdown title="Comercial" id="navbarScrollingDropdown">
        <NavDropdown.Item as={Link} to="/contratos-comerciales">Contratos comerciales</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/prefacturas">Prefacturas</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/facturas">Facturas</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/subastas">Subastas</NavDropdown.Item>
      </NavDropdown>
    )
  }

  const Proveedores = () => {
    return (
      <NavDropdown title="Proveedores" id="navbarScrollingDropdown">
        <NavDropdown.Item as={Link} to="/contratos-proveedores">Contratos proveedores</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/prefacturas">Prefacturas proveedores</NavDropdown.Item>
      </NavDropdown>
    )
  }

  const InformesAndReportes = () => {
    return (
      <NavDropdown title="Informes y Reportes" id="navbarScrollingDropdown">
        <NavDropdown.Item as={Link} to="/visualizar">Visualizar</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/descargar">Descargar</NavDropdown.Item>
      </NavDropdown>
    )
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand as={Link} to="/">Logistica</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Mantenedores />
              <GestionDeServicios />
              <Comercial />
              <Proveedores />
              <InformesAndReportes />
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Menu;