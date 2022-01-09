import React, {useState, useEffect} from 'react';
import {Link} from 'react-dom';
const NavBar = () =>{
    return (
        <nav> 
            <h3>Logo</h3>
            <ul className="navLinks">
                <li>
                    <link to="/Home">Home</link>
                </li>
                <li>
                    <link to={"/Saved"}>Saved</link>
                </li>
                <li>
                    <link to={"/ContactUs"}>ContactUs</link>
                </li>
             </ul>
        </nav>
    )
    }
export default NavBar   