import React, {useState} from 'react';
import './Home.css';
import {useNavigate} from 'react-router-dom';
import { Avatar } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { PieChart } from "react-minimal-pie-chart";
import ProgressBar from './ProgressBar';

function Main({userId,name, email, stepsWalked, stepsTarget, performedDate, scheduledDate, calorieIntake, calorieTarget,
    proteinConsumed, proteinTarget, carbsConsumed, carbsTarget, fatConsumed, fatTarget, feedback}) {

        const showProgressBar = () => {
            console.log("onMouseEnter");
            setProgressBar(true);
        }
         const notShowProgressBar = () => {
            console.log("onMouseLeave");
            setProgressBar(false);
         }

        const navigate = useNavigate();

        const[step,setStep] = useState(stepsTarget);
        const[calorie,setCalorie] = useState(calorieTarget);
        const[progressBar, setProgressBar] = useState();

  return (
    <div className='home_details'>
        <Avatar 
            className='home_details_avatar' 
            alt={name} 
            src="https://watermark.lovepik.com/photo/20211208/large/lovepik-sweet-beauty-sex-image-picture_501591744.jpg" 
        />
        <div className='home_details_name'> 
            <h4>{name}</h4> 
            <p>{email}</p> 
        </div>
        <div className='home_details_steps'>
            <div className='home_details_steps_circular'>
                <CircularProgressbarWithChildren 
                    value={(stepsWalked/stepsTarget)*100}
                    styles={buildStyles({
                        rotation: 0.25,
                        textSize: '20px',
                        pathColor: `rgba(127, 209, 140, 1)`,
                        textColor: 'white',
                        trailColor: 'white',
                    })}
                >
                    <h6 style={{fontSize:"18px"}}>{stepsWalked}</h6>
                    <p style={{fontSize:"13px", fontWeight:"80"}}>walked</p>
                </CircularProgressbarWithChildren>
            </div>
            <div className='home_details_steps_text'>
                <div className='home_details_add'>
                    <AddIcon onClick={()=> setStep(step+500)} fontSize='small' />
                </div>
                <p>
                    <strong>{step/1000}k</strong>
                    <span>target</span>
                </p>
                <div className='home_details_sub'>
                    <RemoveIcon onClick={()=> setStep(step-500)} fontSize='small'/>
                </div>
            </div>
        </div>
        <div className='home_details_date'>
                <div className='home_details_date_perform'>
                    <HowToRegIcon style={{marginRight: "3px"}}/>
                    <h5>{performedDate}</h5>
                </div>
                {scheduledDate==="17 Oct" 
                    ? 
                    <div className='home_details_date_pending' style={{
                        backgroundColor: "rgba(204, 56, 56, 1)",
                        borderRadius: "10px",
                    }}>
                    <PendingActionsIcon style={{marginRight: "3px"}}/>
                    <h5>{scheduledDate}</h5>
                    </div>
                    :
                    <div className='home_details_date_pending'>
                    <PendingActionsIcon style={{marginRight: "3px"}}/>
                    <h5>{scheduledDate}</h5>
                    </div>
                }
        </div>
        {(feedback) 
        ?
         <div className='home_details_exclamation'>
            <PriorityHighIcon fontSize='small'/>
         </div>
        :
          <div className='home_details_arrow'>
            <KeyboardArrowRightIcon onClick={() => navigate(`/${userId}/workout`)} fontSize='small'/>
          </div>
        }
        

        
        <div className='home_details_calorie'>
            <div className='home_details_calorie_pie' >
                    <PieChart
                        lineWidth={20}
                        data={[
                            { title: "Protein", value: proteinConsumed, color: "rgba(244, 92, 132, 1)" },
                            { title: "Carbs", value: carbsConsumed, color: "rgba(245, 201, 15, 1)" },
                            { title: "Fats", value: fatConsumed, color: "rgba(3, 199, 252, 1)", },
                        ]}
                    />
            </div>
            
            <div className='home_details_calorie_text1'>
                <h6 style={{fontSize:"18px"}}>{calorieIntake}</h6>
                <p>calories</p>
            </div> 

            <div className='home_details_calorie_progressBar'><ProgressBar/></div>

            <div className='home_details_calorie_text2'>
                <div className='home_details_add'>
                    <AddIcon onClick={()=> setCalorie(calorie+100)} fontSize='small' />
                </div>
                <p>
                    <strong>{calorie/1000}k</strong>
                    <span>target</span>
                </p>
                <div className='home_details_sub'>
                    <RemoveIcon onClick={()=> setCalorie(calorie-100)} fontSize='small'/>
                </div>
            </div>  
        </div>
        <div className='home_details_arrow'>
            <KeyboardArrowRightIcon onClick={() => navigate(`/${userId}/nutrition`)} fontSize='small'/>
        </div>
        <NotificationsNoneIcon className='home_details_bell'/>
    </div>
  )
}

export default Main;