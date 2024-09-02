import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, DialogContent, DialogTitle, DialogActions, Card, Dialog, CardContent, Grid, Box, Link, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import Slider from 'react-slick';
import profileImage from './assets/buddie.jpg';
import Img11 from './assets/img11.jpg';
import Img22 from './assets/img22.jpg';
import Img33 from './assets/img33.jpg';

import Img1 from './assets/img1.jpg';
import Img2 from './assets/img2.jpg';
import Img3 from './assets/img3.jpg';

import Hyd from './assets/hyd.png';
import Mum from './assets/mumbai.png';
import Del from './assets/delhi.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WiFiIcon from '@mui/icons-material/Wifi';
import FoodIcon from '@mui/icons-material/Restaurant';
import ParkingIcon from '@mui/icons-material/LocalParking';

import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { List, ListItem, ListItemText } from '@mui/material';


import ImgHostel1 from './assets/hostel1.jpg';
import ImgHostel2 from './assets/hostel2.jpg';
import ImgHostel3 from './assets/hostel3.jpg';


import WifiIcon from '@mui/icons-material/Wifi';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PowerIcon from '@mui/icons-material/Power';


import { Place as PlaceIcon } from '@mui/icons-material';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Header from './Header';
import MenuIcon from '@mui/icons-material/Menu'; // Import an icon of your choice
import Sidebar from './sidebar';


const HeaderContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'flex-start',
  justifyContent: 'space-between',
  mb: 4,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '14px 16px',
  // borderRadius: '4px',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: '#fff',
  zIndex: 1000,
});

const StayText = styled(Typography)({
  fontFamily: '"Sofia", sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'orange',
});

const BuddieText = styled(Typography)({
  fontFamily: '"Sofia", sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
});


const ProfileIcon = styled(IconButton)({
  borderRadius: '50%',
  backgroundColor: '#ddd',
  width: '40px',
  height: '40px',
});

const CarouselContainer = styled('div')({
  height: '350px',
  position: 'relative',
  overflow: 'hidden',
});

const CarouselImage = styled('img')({
  width: '100%',
  // height: '100%',
  height: '350px',
  objectFit: 'contain',
});



const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 200,
  autoplay: true, // Auto-scroll
  autoplaySpeed: 3000, // Speed of auto-scroll
  slidesToShow: 1,
  slidesToScroll: 1,
};



const CityItem = styled(Box)(({ selected }) => ({
  display: 'inline-block',
  textAlign: 'center',
  margin: '0 10px',
  cursor: 'pointer',
  borderRadius: '10px',
  padding: '5px',
  position: 'relative',
  transition: 'transform 0.3s, opacity 0.3s', // Add transition for smooth effect
  transform: selected ? 'scale(1.05)' : 'scale(1)', // Scale up selected city
}));




const CityListContainer = styled(Box)({
  display: 'flex',
  overflowX: 'auto',
  padding: '10px',
  whiteSpace: 'nowrap',
});



const CityImage = styled('img')({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const CityName = styled(Typography)({
  marginTop: '8px',
  fontSize: '12px',
  fontWeight: 'bold',
});


const BoxContainer = ({ bgColor, children }) => (
  <Box
    sx={{
      backgroundColor: bgColor,
      borderRadius: '8px',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
    }}
  >
    {children}
  </Box>
);


// Home component
const Home = () => {
  
  const cities = [
    { name: 'Hyderabad', image: Hyd },
    { name: 'Chennai', image: Del },
    { name: 'Mumbai', image: Mum },
    // Add more cities as needed
  ];


  useEffect(() => {
    // Check if a city is stored in local storage
    const storedCity = localStorage.getItem('selectedCity');
    if (storedCity) {
      setSelectedCity(storedCity);
    } else {
      // If no city is stored, open the location dialog
      setIsLocationDialogOpen(true);
    }
  }, []);



  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // const handleCityClick = (city) => {
  //   setSelectedCity(city.name);
  // };


  // Inside your component
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    // Navigate to the hostels page with the city name as a query parameter
    navigate(`/hostels?city=${city.name}`);
  };



  const [selectedCity, setSelectedCity] = useState('');
  const [isLocationDialogOpen, setIsLocationDialogOpen] = useState(false);

  const handleLocationClick = () => {
    setIsLocationDialogOpen(true);
  };

  const handleLocationDialogClose = () => {
    setIsLocationDialogOpen(false);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const handleLocationConfirm = () => {
    // Store the selected city in local storage
    localStorage.setItem('selectedCity', selectedCity);
    setIsLocationDialogOpen(false);
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleProfileIconClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };



  return (
    <div>

      <>
        <AppBar position="static">
          <HeaderContainer>
            <Box display="flex" alignItems="center">
              <IconButton color="inherit" onClick={handleLocationClick}>
                <PlaceIcon style={{ color: '#006399' }} />
                <Typography variant="h6" style={{ marginRight: '16px', color: '#333' }}>
                  {selectedCity || 'Select City'}
                </Typography>
              </IconButton>
            </Box>
            <Box display="flex" alignItems="center">
              <StayText variant="h4" component="h1" style={{ color: '#006399' }}>
                Stay
              </StayText>
              <BuddieText variant="h4" component="h1" style={{ marginRight: '10px' }}>
                Buddie
              </BuddieText>
               <ProfileIcon onClick={handleProfileIconClick}>
                            {/* <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%' }} />  */}
              <Sidebar open={drawerOpen} onClose={handleDrawerClose} />

              </ProfileIcon> 
         
            </Box>

          </HeaderContainer>
        </AppBar>

        <Dialog open={isLocationDialogOpen} onClose={handleLocationDialogClose} fullWidth={true} maxWidth="sm">
          <DialogTitle>Select a City</DialogTitle>
          <DialogContent>
            <List>
              <ListItem button selected={selectedCity === 'Hyderabad'} onClick={() => handleCitySelect('Hyderabad')}>
                <ListItemText primary="Hyderabad" />
              </ListItem>
              <ListItem button selected={selectedCity === 'Mumbai'} onClick={() => handleCitySelect('Mumbai')}>
                <ListItemText primary="Mumbai" />
              </ListItem>
              <ListItem button selected={selectedCity === 'Chennai'} onClick={() => handleCitySelect('Chennai')}>
                <ListItemText primary="Chennai" />
              </ListItem>
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleLocationDialogClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleLocationConfirm} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>


      <CarouselContainer style={{ marginTop: '4px' }}>
        <Slider {...carouselSettings}>
          <div>
            <CarouselImage src={Img11} alt="Slide 1" />
          </div>
          <div>
            <CarouselImage src={Img22} alt="Slide 2" />
          </div>
          <div>
            <CarouselImage src={Img33} alt="Slide 3" />
          </div>
        </Slider>
      </CarouselContainer>

      {/* City List Component */}
      <Typography variant="h6" style={{ margin: '20px', textAlign: 'left', fontFamily: 'Anta', fontSize: '24px', color: '#ff9933', }}>
        Explore Our Cities
      </Typography>
      <CityListContainer>
        {cities.map((city, index) => (
          <CityItem
            key={index}
            selected={selectedCity === city.name}
            onClick={() => handleCityClick(city)}
          >
            <CityImage src={city.image} alt={city.name} />
            <CityName>{city.name}</CityName>
          </CityItem>
        ))}
      </CityListContainer>




      <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <BoxContainer bgColor="#ffffff">
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Lowest price Guarantee
            </Typography>
            <Typography variant="body2" color="textSecondary">
              only on App
            </Typography>
          </Box>
          <Box component="img" src={Img2} alt="App Guarantee" sx={{ height: '60px', borderRadius: '10px' }} />
        </BoxContainer>

        <BoxContainer bgColor="#d8f3dc">
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Fabulous, or free
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Hassle-free stay, else we pay
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <Button variant="text" color="primary" onClick={handleClickOpen}>
                Know More
              </Button>
            </Typography>
          </Box>
          <Box component="img" src={Img1} alt="Fabulous or Free" sx={{ height: '60px', borderRadius: '10px' }} />
        </BoxContainer>

        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="lg" // Adjust this if you need to control the maximum width
          PaperProps={{
            sx: { position: 'fixed', bottom: 0, margin: 0, borderRadius: '8px 8px 0 0', width: '100%' }
          }}
        >
          <DialogContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" fontWeight="bold">
                More Information
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Box padding="20px">
              {/* Basic Lines with Icons and Text */}
              <Box display="flex" alignItems="center" mb={1}>
                <WifiIcon style={{ marginRight: '8px' }} />
                <Typography variant="body1">High-speed Wi-Fi available in all areas</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <LocalLaundryServiceIcon style={{ marginRight: '8px' }} />
                <Typography variant="body1">24/7 washing facilities</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <RestaurantIcon style={{ marginRight: '8px' }} />
                <Typography variant="body1">Daily meals with a variety of cuisines</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <StarIcon style={{ marginRight: '8px' }} />
                <Typography variant="body1">Top-rated hostel quality and service</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <HealthAndSafetyIcon style={{ marginRight: '8px' }} />
                <Typography variant="body1">Strict hygiene standards maintained</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <PowerIcon style={{ marginRight: '8px' }} />
                <Typography variant="body1">Uninterrupted power supply</Typography>
              </Box>

            </Box>

            <Box padding="20px" bgcolor="#e3f2fd">
              {/* How it Works - Stacked Boxes */}

              {/* Call Box */}
              <Box
                width="85%"
                padding="20px"
                borderRadius="8px"
                bgcolor="#ffffff"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                display="flex"
                alignItems="center"
                marginBottom="16px"
              >
                <CallIcon style={{ color: '#0288d1', marginRight: '10px' }} />
                <Typography variant="body2">
                  Call us anytime for assistance.
                </Typography>
              </Box>


              {/* Time Box */}
              <Box
                width="85%"
                padding="20px"
                borderRadius="8px"
                bgcolor="#ffffff"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                display="flex"
                alignItems="center"
                marginBottom="16px"
              >
                <AccessTimeIcon style={{ color: '#0288d1', marginRight: '10px' }} />
                <Typography variant="body2">
                  We value your time, quick responses assured.
                </Typography>
              </Box>

              {/* Issues Box */}
              <Box
                width="85%"
                padding="20px"
                borderRadius="8px"
                bgcolor="#ffffff"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                display="flex"
                alignItems="center"
                marginBottom="16px"
              >
                <ReportProblemIcon style={{ color: '#0288d1', marginRight: '10px' }} />
                <Typography variant="body2">
                  Report issues, we resolve them promptly.
                </Typography>
              </Box>
            </Box>




          </DialogContent>
        </Dialog>
      </Box>


    </div>
  );
};

export default Home;
