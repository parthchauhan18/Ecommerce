import styled from '@emotion/styled'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import "./Navbar.css";
import { Badge } from '@mui/material';





const Navbar = () => {
    return (
        <div className='Container'>
            <div className='Wrapper'>
                <div className='Left'>
                    <div className='language'>EN</div>
                    <div className='SearchContainer'>
                        <input />
                        <Search style={{color:"grey", fontSize:16}}/>
                    </div>
                </div>
                <div className='Center'>
                    <div className="Logo">
                        PARTH .
                    </div>
                </div>
                <div className='Right'>
                    <div className="MenuItem">
                        REGISTER
                    </div>
                    <div className="MenuItem">
                        SIGN IN
                    </div>
                    <div className="MenuItem">
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Navbar
