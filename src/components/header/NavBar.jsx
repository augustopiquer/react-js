import React from 'react'

export const NavBar = () => {
  

  return (
    <nav className="nav">
        <ul className="nav-menu">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
              </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sucursal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Dejanos tu comentario!</a>
            </li>
        </ul>
    </nav>
  )
}
