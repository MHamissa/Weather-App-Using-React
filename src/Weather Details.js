import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useEffect,useState } from 'react';
import TextField from '@mui/material/TextField';



export default function WeatherDetails(){
 
 
  const [temp,setTemp]=useState({
    city:'City You Want',
     number:null,
     description:'Here Weather Description',
     min:null,
     max:null,
     windSpeed:null,
     WindAngle:null
  });
    const [currentDate, setCurrentDate] = useState(new Date());
    const [longitude,setLongitude]=useState(null);
    const [latitude,setLatitude]=useState(null);


  function getWeather(longitude,latitude){
     axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=23012caa6cd9437d2588b8f412b67f5f`)
     .then(function (response) {
       // handle success
       console.log(response.data);
       setTemp({
        number:Math.round(response.data.main.temp-272.15),
        min:Math.round(response.data.main.temp_min-272.15),
        max:Math.round(response.data.main.temp_max-272.15),
        description:response.data.weather[0].description,
        city: response.data.name,
        windSpeed:response.data.wind.speed,
        WindAngle: response.data.wind.deg
     });
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })

  }
     function handleWeatherDetailsClick(){
     if(longitude&&latitude){
      getWeather(longitude,latitude);
     } else{
        alert ('Enter Valid Coords');
      }
     }
      
     
return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xs' >
      <Box >
      <TextField id="outlined-basic" 
      label="Enter Latitude" 
      variant="filled"
      style={{backgroundColor:'white'}} 
      onChange={(e)=>{
       setLatitude(e.target.value);
      }}
      />
      <TextField id="outlined-basic" 
      label="Enter Longitude" 
      variant="filled"
      style={{backgroundColor:'white',
              marginTop:'10px'
      }} 
      onChange={(e)=>{
       setLongitude(e.target.value);
      }}
       />
    <Box style={{margin:'10px',color:'#ecececff',}}>  
      <Button 
    variant="contained"
     onClick={handleWeatherDetailsClick}
     style={{backgroundColor:'#004d9bff'}}
    >Get Weather Details
    </Button>
    </Box> 


      </Box>
       <Card sx={{ minWidth: 200, height:'fit-content'}} style={{
        backgroundColor:'#004d9bff',
        
        }}>
      <CardContent>
        <Container style={{
            display:'flex',
            flexDirection:'row',
            gap:'20px',
            justifyContent:'left',
            alignItems:'center',
            direction:'ltr',
           
          
            
        }}>
       
        <Typography gutterBottom sx={{ color: '#ecececff', 
            fontSize: 35, 
            
            marginBottom:'10px',
            paddingBottom:'3px'
            }}>
              {temp.city}
        </Typography>
        <Typography sx={{ color: '#ecececff', fontSize: 20 ,
            
            marginBottom:'10px',
            paddingBottom:'3px'
        }}>
            {currentDate.toLocaleString()}
        </Typography>
        
        </Container>
        <hr ></hr>
        
        <Container style={{
            display:'flex',

            justifyContent:'center',
            
        }}>
        <Typography variant="body2" sx={{color:'#ecececff', fontSize:35}} >
          {temp.number}
         <p style={{fontSize:20}}>{temp.description}</p>
        <Typography sx={{ color: '#ecececff', fontSize: 15  }}
         style={{
            display:'flex',

            justifyContent:'center',
            }}
         >
           Maximum {temp.max} <br/> Minimum {temp.min}
        </Typography>
        </Typography>
        <Container>
          
        </Container>
       <Container style={{ color: '#ecececff', fontSize: 35, width:'auto',marginTop:'15px' }}>
        Wind
        
        <p style={{fontSize:15, marginTop:'57px'}}>{temp.windSpeed} Knots<br/>
        
        {temp.WindAngle} Degrees</p>
       </Container>
        </Container >
         
        
      </CardContent>
      
    </Card>
 </Container>
    </React.Fragment>
  );
}