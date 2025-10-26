import React from 'react'
import HeroLeft from './HeroLeft'
import { Stack } from '@mui/material';
import HeroRight from './HeroRight';
function Hero() {
    return (
        <>
            <section
                className="hero-sec"
                style={{
                  backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.webp)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className='container'>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ width: "100%", minHeight: "100vh", px: 4 }}
                    >
                        <HeroLeft />
                        <HeroRight />
                    </Stack>
                </div>


            </section>
        </>
    )
}

export default Hero