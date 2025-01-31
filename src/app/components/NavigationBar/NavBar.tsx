import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../utils/ROUTES'
import { Tooltip } from '@mui/material';

export default function NavBar() {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate(ROUTES.HOME);
    }

    const navigateToCheckStage = () => {
        navigate(ROUTES.CHECK_STAGE);
    }

    const openGitHub = (url: string) => {
        window.open(url, '_blank');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', marginLeft: 5, marginRight: 5 }}>
                        Liver Necrosis
                    </Typography>

                    <Box sx={{ marginRight: "auto", display: "flex", gap: 2 }}>
                        <Box color="inherit" onClick={navigateToHome}>
                            <Typography variant="h5">
                                Home
                            </Typography>
                        </Box>
                        <Box color="inherit" onClick={navigateToCheckStage}>
                            <Typography variant="h5">
                                Check Stage
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button color="inherit">Creators: </Button>

                        <Tooltip title="Szymon" arrow>
                            <Button
                                color="secondary"
                                variant="contained"
                                sx={{ cursor: 'pointer' }}
                                onClick={() => openGitHub('https://github.com/Szymon-Stasiak')}
                            >Szymon</Button>
                        </Tooltip>
                        <Tooltip title="Filip" arrow>
                            <Button
                                color="secondary"
                                variant="contained"
                                sx={{ cursor: 'pointer' }}
                                onClick={() => openGitHub('https://github.com/filip-kobus')}
                            >Filip</Button>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
