import {Outlet} from 'react-router-dom';
import NavBar from "./NavBar";
import {Box} from '@mui/material';
import React from "react";


const NavBarAdder = () => {

    return (<>
            <NavBar/>
            <Box component={'main'} sx={{display: 'flex', marginTop: '80px', flexGrow: 1}}>
                <Box sx={{flexGrow: 1, p: 7, pt: 1}}>
                    <Outlet/>
                </Box>
            </Box>
        </>
    );
};

export default NavBarAdder;
