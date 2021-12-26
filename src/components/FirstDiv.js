import React from 'react';
import Typography from '@mui/material/Typography';
import Slide from './Slide';
import Button from '@mui/material/Button';
const FirstDiv = () => {
    return(
        <div style={{
                display:"flex",
                justifyContent:"center",       
                background: "grey",      
                textAlign:"center",
                height:"80%" ,
                width:"100%",         
                 }}>
            <div className="First_div"
            style={{ justifyContent:"center",       background: "grey",      textAlign:"center",
                height:"100%" ,
                width:"60% " ,

            }}>
                <Typography variant="h2" component="h2"
                style={{
                    marginTop:"5%",
                    fontWeight:"600",
                }}>
                    Travel & Tourism
                </Typography>

                <Typography variant="h6" component="h6"
                style={{
                    marginTop:"5%",
                    fontWeight:"700",
                        
                    }}>
                    LET'S TRAVEL !!
                </Typography>
                <p style={{
                    marginTop:"5%",
                }}>
                "Travel is the only thing you buy that makes you richer."<br/>
            one should travel the world to come their dream true .....<br/>
            So let's begin your journey with Travel and Tourism
                </p>

                
                <Button className="btn" variant="contained" color="success" style={{margin:"5%"}}>
                    LEARN MORE    </Button>

            </div>
            <div
            style={{ justifyContent:"center",      
             background: "grey",      textAlign:"center",
            height:"100%" ,
            width:"40% " , 

            }}>
                <Slide/>
            </div>
        </div>
    );
}
export default FirstDiv;