import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink } from 'react-router-dom'

import logo from '../logo.svg'
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={ logo } alt="React logo" />
                <ul>
                  <li>
                      <NavLink to='/' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Shopping</NavLink>
                  </li>
                  <li>
                      <NavLink to='/about' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                  </li>
                  <li>
                      <NavLink to='/users' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                  </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/about' element={ <h1>About</h1> }></Route>
                <Route path='/users' element={ <h1>Users</h1> }></Route>
                <Route path='/' element={ <ShoppingPage /> }></Route>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
