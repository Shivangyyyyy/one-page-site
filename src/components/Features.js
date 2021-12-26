import React from 'react';
// import "./Card.css";
// import ball from './asset/ball.jpg';
import Typography from '@mui/material/Typography';
import Box from  '@mui/material/Box';
import Slide from './Slide';
const Features = () => {
    return (
        <>
        

        <Box  className="outer"  sx={{
           margin: "2px",
           height:"60%",
           width:"100%",
           background: "#abb7c2",
         
       }}>
        <h1 style={{
          textAlign:'center',
          marginTop:"20px",
          color:"#6c7075",
         
        }}>   FEATURES </h1>


     <div
     style={{
           display:"flex",
     }}>
       <div style={{
           margin: "2px",
           height:"100%",
           width:"50%",
           paddingLeft:"20px"}}>
            <Slide/>
     </div>
       <div className="picture" style={{
            margin: "2px",
           height:"100%",
           width:"5%",
           padding:"5px",
          
           
           
       }}>
                <img src="https://cdn.cdnparenting.com/articles/2019/02/12152000/1043536546-H-1024x700.jpg" width="50"
  height="50px" alt="dimdim"  style={{
       
       marginTop:"9px"
  }}/>
  <br/>
            
               <img src="https://i.natgeofe.com/n/192d70c2-64a1-4933-9c07-d058996808cf/world-monunment-funds--8-post-independence-architecture-deli.jpg"  width="45"
  height="45px"alt="text" style={{
      marginTop:"35px"
  }}/>
  <br/>
            
               <img src="http://www.see-and-do-france.com/images/famous_french_monuments_eiffel_tower.jpg" width="45"
  height="45px" alt="text"  style={{
      marginTop:"28px"
  }} />
  <br/>
                
               <img src="https://indiantravelpictures.files.wordpress.com/2012/11/gateway-of-india.jpg"  width="45"
  height="45px" alt="mon"  style={{
        marginTop:"30px"
  }} />
               
       </div>

        <div
        sx={{
               margin: "2px",
               height:"100%",
               width:"50%",
              
          }}>

             <Typography variant="h5" component="h5">
                 Features One       
            </Typography>

            <p> A monument is a type of structure that was explicitly created to commemorate a person or event.</p>

            <Typography variant="h5" component="h5" >
                 Features One
            </Typography>
            <p>
                 Some day I am going to travel the world.  
            </p>

            <Typography variant="h5" component="h5">
                 Features One
            </Typography>
            <p>
                 We travel not to escape life, but for life to escape us.  
            </p>

            
            <Typography variant="h5" component="h5" >
                 Features One
            </Typography>
            <p>
                 Travel far enough to meet yourself.               
            </p>

  

        </div>
        </div>
        </Box>
        </>
    );
}

export default Features;
