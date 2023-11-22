import React, { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import VillageTable from "./villageTable";
import LoadingButton from '@mui/lab/LoadingButton';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


function App() {

    const [profileData, setProfileData] = useState(null)
    const [loading, setLoading] = useState(false)
    function getData(route) {
        setLoading(true)
        axios({
            method: "GET",
            url: `https://travdex-index.onrender.com/${route}`,
            /*url: `http://localhost:5000/${route}`,*/
            
        })
            .then((response) => {
                setLoading(false)
                const res = response.data
                setProfileData(({
                    sowData: res
                }))
            }).catch((error) => {
                if (error.response) {
                    setLoading(false)
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
              
            
              
                  
        
              {/*<LoadingButton variant="contained" endIcon={<FilterVintageIcon className='App-logo' />} onClick= loading={showLoader} disabled={showLoader}>*/}
                  
              {/*</LoadingButton>*/}

              <Box sx={{ width: 200, backgroundColor: 'lavender', borderRadius: 2, padding: 1, margin: 4, paddingBottom: 2 }}>
                  <LoadingButton
                      size="small"
                      onClick={() => getData('new')}
                      endIcon={<FilterVintageIcon className='App-logo' />}
                      loading={loading}
                      loadingPosition="end"
                      variant="contained"
                  >
                      <span>{profileData ? 'Refresh SOW Data' : 'Get Travian Data' } </span>
                  </LoadingButton>
                  <Box sx={{paddingTop: 2, margin: -1 }}>
                      {loading ? <LinearProgress color="success" /> : <div></div>}
                  </Box>
              </Box>
             {/*<button onClick={getData('pop')}>Get SOW Population Data</button>*/}
              {profileData && <div>
                
                  
                  <ul>
                      {loading ? <LinearProgress color="primary" /> : <div></div>}
                      <VillageTable info={profileData.sowData } />
                      {loading ? <LinearProgress color="primary" /> : <div></div>}
                  </ul>
                  
              </div> || !profileData &&

              <Box sx={{ width: 300, backgroundColor: 'lavender', borderRadius: 2, padding: 1, margin: 2 }}>
                  <Skeleton animation="wave" />
                      {loading ? <LinearProgress color="primary" /> : <div></div>}

                      <Skeleton animation="wave" />
                      {loading ? <LinearProgress color="primary" /> : <div></div>}
                      <Skeleton animation="wave" />
                      {loading ? <LinearProgress color="primary" /> : <div></div>}
              </Box> 
              }
               
      </header>
    </div>
  );
}

export default App;
