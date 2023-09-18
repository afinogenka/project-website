import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function CoursePage(props) {
    console.log(props)
    const params = useParams();
    const id = params.id;
    const defaultTheme = createTheme();
    



  return (
    <div>
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                    <Typography variant="h2" component="h1" gutterBottom>
                    Name {id}
                     {course.name}
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {'description'} {course.description}
                        
                    </Typography>

                </Container>
            </Box>
        </ThemeProvider>
    </div>
  )
}

export default CoursePage