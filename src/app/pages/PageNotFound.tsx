import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function PageNotFound() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Box textAlign="center" mt={5}>
            <Typography variant="h2" color="primary" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography color="text.primary" sx={{pb: "20px"}}>
                The requested URL <strong>{location.pathname}</strong> was not found on this server.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/Home")}
            >
                Go to Home
            </Button>
        </Box>
    );
}

export default PageNotFound;
