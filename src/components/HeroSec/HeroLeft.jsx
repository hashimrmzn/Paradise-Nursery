import React from 'react'
import { Typography, Stack, Button } from '@mui/material';
import { Link } from "react-router-dom";
function HeroLeft() {
    return (
        <>
            <Stack sx={{ width: "40%" }}>
                <Typography variant='h1' sx={{ color: "#fff", fontSize: "62px", textAlign: "center" }}>
                    Welcome to Paradise Nursery
                </Typography>
                <Typography sx={{ color: "#fff", textAlign: "center", margin: "20px 0" }}>
                    Where Green Meets Senrity
                </Typography>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ width: "150px", height: "42px", margin: "0 auto" }}
                    component={Link}
                    to="/products"
                >
                    Get Started
                </Button>


            </Stack>
        </>
    )
}

export default HeroLeft