import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { navs } from '../types/nav'

const AdminNav = () => {

    const activeLink = {
        color: '#f9f9f9',
        textDecoration: 'none',
        borderBottom: '3px solid white',
        marginBottom: '10px'
    };
      
    const normal = {
        color: '#f9f9f9',
        textDecoration: 'none',
        borderBottom: 'none'
    };

    const user = localStorage.getItem('email')

  return (
    <>
      <div className='head'>
        <h3>IF LOVA OFFICIEL</h3>
        <div className='user'><h3>Admin : </h3><span>{user}</span></div>
        
      </div>

      {/* <div className='tabs'> 
      <ul>
        {
          navs.map((item,index) => {return(
            <li key={index}>
              <NavLink 
                to={item.path}
                style={({ isActive }) => (isActive ? activeLink : normal)}
              >
                {item.icon}
              </NavLink>
            </li>
            )
          })
        }
        </ul>
      </div> */}
    </>
  )
}

export default AdminNav