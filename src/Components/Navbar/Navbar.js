import { Link } from 'react-router-dom'
import './Navbar.css'
import {id} from '../../storageKeys.js'

async function  LogOut()
{
    sessionStorage.removeItem(id);
    location.reload();
}

export default function Navbar() {
    
  if(sessionStorage.getItem(id) != null)
    {
      return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" id='title' href="#">SuperUsefulApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
           <button className='btn btn-outline-light'><Link style={{textDecoration:"none"}} to={'/create'}>Create Post</Link></button>           
           <button onClick={LogOut} className='btn btn-outline-light'><Link style={{textDecoration:"none"}} to={'/'}>Log out</Link></button>           
          </div>
        </div>
      </nav>
      )
    }    
      return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" id='title' href="#">SuperUsefulApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
           <button className='btn btn-outline-light'><Link style={{textDecoration:"none"}} to={'/login'}>Login</Link></button>
           <button className='btn btn-outline-light'><Link style={{textDecoration:"none"}} to={'/register'}>Register</Link></button>
          </div>
        </div>
      </nav>

    )
      
}
