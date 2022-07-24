import React from 'react';
import './ProgressBar.css';
import data from './data';

function ProgressBar() {

    const [data1] = data;

  return (
    <div className='progressBar'>
        <div className='progress_cover'>
        <div className='progressBar_'>
            <div className='header'><p style={{fontSize: "12px"}}>PROTEIN</p><p style={{fontSize: "12px"}}>{data1.proteinTarget}g</p></div>
            <div className='progress'>
                <div className='progressBar_outer'>
                    <div className='progressBar_inner' style={{width:`calc((${data1.proteinConsumed}/70)*100%)`, backgroundColor: "rgba(244, 92, 132, 1)"}}>
                        <span
                            style={{
                                fontSize:"10px",
                                position:"relative",
                                left:"20px",
                                bottom:"7px",
                                color:"rgba(244, 92, 132, 1)"
                            }}
                        >{data1.proteinConsumed}g</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='progressBar_'>
            <div className='header'><p style={{fontSize: "12px"}}>FAT</p><p style={{fontSize: "12px"}}>{data1.fatTarget}g</p></div>
            <div className='progress'>
                <div className='progressBar_outer'>
                    <div className='progressBar_inner' style={{width:`calc((${data1.fatConsumed}/70)*100%)`,backgroundColor: "rgba(3, 199, 252, 1)"}}>
                        <span
                            style={{
                                fontSize:"10px",
                                position:"relative",
                                left:"20px",
                                bottom:"7px",
                                color:"rgba(3, 199, 252, 1)"
                            }}
                        >{data1.fatConsumed}g</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='progressBar_'>
            <div className='header'><p style={{fontSize: "12px"}}>CARBS</p><p style={{fontSize: "12px"}}>{data1.carbsTarget}g</p></div>
            <div className='progress'>
                <div className='progressBar_outer'>
                    <div className='progressBar_inner' style={{width:`calc((${data1.carbsConsumed}/70)*100%)`, backgroundColor: "rgba(245, 201, 15, 1)"}}>
                        <span
                            style={{
                                fontSize:"10px",
                                position:"relative",
                                left:"20px",
                                bottom:"7px",
                                color:"rgba(245, 201, 15, 1)"
                        }} 
                        >{data1.carbsConsumed}g</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProgressBar;