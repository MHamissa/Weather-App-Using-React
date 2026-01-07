import logo from './logo.svg';
import './App.css';
import Typography from '@mui/material/Typography';
import WeatherDetails from './Weather Details';
import axios from 'axios';



function App() {
  
  return (
   
    <div className="App" style={{
      backgroundColor: '#0364c5ff', 
      minHeight:'100vh',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      fontFamily:'cursive'
      }}>
        <h1 style={{marginBottom:'50px',
          color:'#ecececff',
          fontSize:50
        }}>Weather API App</h1>
      <WeatherDetails/>
    </div>
   
);
}

export default App;
