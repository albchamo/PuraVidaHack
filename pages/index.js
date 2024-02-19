// pages/index.js
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Index() {

    const users = [
        { title: 'Empresa Patrocinadora', text: 'Tiene un problema a resolver con tecnología blockchain, necesita un POC para validar su funcionalidad' },
        { title: 'Estudiantes', text: 'Talento que desea participar y ganar experiencia en tecnología blockchain y web3, pero no tiene proyectos ni guía para hacerlo.' },
        { title: 'Mentores', text: 'Dispuestos a compartir su conocimiento y liderar el desarrollo del POC en el hackathon' },
        // ... add more users as needed
      ];

    const stepsToJoin = [
        { step: 'Entre al Discord', text: 'Tenemos un server para comunicarnos y organizarnos, ahí puede entrar y presentarse!' },
        { step: 'Solicite el MAE token', text: 'Usamos un token de governanza que es el MAE. En el discord puede solicitarlo.' },
        { step: 'Reciba el token', text: 'Si es aprobado, recibirá el MAE token sin ningún costo, esto le permite proponer y votar propuestas' },
        { step: 'Contribuir', text: 'Lo hicimios un DAO para que muchos puedan proponer y contribuir, sea un empresa, estudiantes, mentores... Necesitamos skills para crecer!' },
        // ... add more steps as needed
    ];

    const cardHoverStyle = {
        '&:hover': {
            transform: 'scale(1.05)', // Scales up the card a bit on hover
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.19)', // Adds shadow effect on hover
        },
    transition: 'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out', // Smooth transition for hover effect
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

return ( 
<>
<AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pura Vida Hack DAO
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link href="https://discord.gg/WeWnycFzRb" target="_blank" rel="noopener noreferrer" color="inherit">
                                        Join Discord
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link href="https://app.aragon.org/#/daos/polygon/0xb1f450172c3cd65485d625e4379cbbfc80ae5a9d/dashboard" target="_blank" rel="noopener noreferrer" color="inherit">
                                        DAO Dashboard
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        // Display regular links for larger screens
                        <>
                            <Link href="https://discord.gg/WeWnycFzRb" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ margin: 1 }}>
                                Join Discord
                            </Link>
                            <Link href="https://app.aragon.org/#/daos/polygon/0xb1f450172c3cd65485d625e4379cbbfc80ae5a9d/dashboard" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ margin: 1 }}>
                                DAO Dashboard
                            </Link>
                        </>
                    )}
                </Toolbar>
            </AppBar>
    <Container maxWidth="lg">
        <Box my={4} textAlign="center">

    {/* Use sx prop for styling instead of inline style for better responsiveness */}
            <Box sx={{  
            display: 'flex', // Flexbox container for centering child
            justifyContent: 'center', // Horizontally center the flex child
            marginBottom: 2, 
            alignContent: 'center' }}>
          
                <CardMedia
                component="img"
                image="/images/PuraVidaHackDAO-Final.jpeg"
                alt="Hero Image"
                sx={{ width: { xs: '80%', sm: '60%', md: '30%' }, 
                    height: 'auto' }} // Responsive width
                     />
            </Box>
        
            <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom>
                La Sele Web3 de Costa Rica
            </Typography>
            <Typography variant="body1" gutterBottom>
                Somos una DAO que busca fomentar la participación de Costarricenses en hackathons, eventos y productos web3 a nivel global.
            </Typography>
        </Box>

        <Box my={4}>
            <Typography variant="h4" gutterBottom>
            Cómo funciona? 
            </Typography>
            <Grid container spacing={2} justifyContent="center">
            {users.map((user, index) => (
                <Grid item xs={12} sm={4} key={index}>
                {/* Apply the hover style to the Card component */}
                <Card sx={cardHoverStyle}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h3">
                        {user.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {user.text}
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                ))}
            </Grid>
        </Box>

        <Box my={4}>
        <Typography variant="h4" gutterBottom>
            Cómo ser parte de DAO?
        </Typography>
        {stepsToJoin.map((item, index) => (
            <Box my={2} key={index}>
            <Typography variant="h6" component="h3">
                Step {index + 1}: {item.step}
            </Typography>
            <Typography variant="body1">
                {item.text}
            </Typography>
            </Box>
        ))}
        </Box>

        <Box my={4} textAlign="center">
            <Button variant="contained" color="primary" size="large" sx={{ margin: 1 }}>
                <a href="https://discord.gg/WeWnycFzRb" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                Join Discord
            </a>
            </Button>
            <Button variant="contained" color="primary" size="large" sx={{ margin: 1 }}>
                <a href="https://app.aragon.org/#/daos/polygon/0xb1f450172c3cd65485d625e4379cbbfc80ae5a9d/dashboard" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                DAO Dashboard
                </a>
            </Button>
        </Box>
    </Container>
    </>
  );
}
