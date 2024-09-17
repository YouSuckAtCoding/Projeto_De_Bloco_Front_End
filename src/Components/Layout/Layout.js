import './Layout.css' 
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer.js'
import { Outlet } from "react-router-dom";

export default function Layout()
{
    return(

        <body className="layout">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>        
        </body>
       
    )
}