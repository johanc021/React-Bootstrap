import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Navegacion = () => {
	return (
		<div className='contenedorNav'>
			<Navbar className='Nav' variant="dark" expand="lg" style={{ maxWidth: "1600px", margin: "0 auto" }}>
				<Container>
					<Navbar.Brand href="#home">Mi sitio</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Inicio</Nav.Link>
							<Nav.Link href="#link">Acerca de</Nav.Link>
							<NavDropdown title="Servicios" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Servicio 1</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Servicio 2</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Servicio 3</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separador</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
		
)};

export default Navegacion;
