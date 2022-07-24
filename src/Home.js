import React from 'react';
import './Home.css';
import Main from './Main';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import data from './data';

function Home() {

  return (
    <div className='home'>
            <div className='home_header'>
                <div className='home_header_left'></div>
                <div className='home_header_right'>
                    <section><DirectionsWalkIcon/><h3 style={{marginLeft: "8px"}}>Steps</h3></section>
                    <section style={{marginLeft:"90px"}}><FitnessCenterIcon /><h3 style={{marginLeft: "8px"}}>Workout</h3></section>
                    <section style={{marginLeft:"70px"}}><RoomServiceIcon/><h3 style={{marginLeft: "8px"}}>Nutrition</h3></section>
                </div>
            </div>
            <div className='home_detail'>
                {data.map((data) => {
                    return(
                        <Main {...data}/>
                    );
                })}
            </div>
    </div>
  )
}

export default Home;