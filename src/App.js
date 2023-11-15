import React, { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import VillageTable from "./villageTable";
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


function App() {

    const [profileData, setProfileData] = useState(null)

    function getData(route) {
        axios({
            method: "GET",
            url: `/${route}`,
        })
            .then((response) => {
                const res = response.data
                setProfileData(({
                    sowData: res
                }))
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }  

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
              
            
              
                  
        
              <Button variant="contained" endIcon={<FilterVintageIcon className='App-logo'/>} onClick={() => getData('new')}>
                  Get Travian Data
              </Button>
              
             {/*<button onClick={getData('pop')}>Get SOW Population Data</button>*/}
              {profileData && <div>
                
                  
                  <ul>
                     
                      <VillageTable info={profileData.sowData } />
                      
                  </ul>
                  
              </div> || !profileData &&

              <Box sx={{ width: 300, backgroundColor: 'lavender', borderRadius: 2, padding: 1, margin: 2 }}>
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
              </Box>
              }
               
      </header>
    </div>
  );
}

export default App;
