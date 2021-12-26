import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Button,Box } from '@mui/material';

export default function ActionAreaCard() {
  return (
<div> 
  <h1 style={{
    textAlign:'center',
    marginTop:"20px",
    color:"#6c7075",
    background:"#fff",
  }}> ADVANTAGES </h1>

    <Box   className="outer"  sx={{
           margin: "auto",
          display:"flex",
          justifyContent:"space-around",
          height:"60%",
        
        // padding:"35",
        textAlign:"center",
        lineHeight:"30px",
      }}>
     <Card style={{
       width:"30%",
        marginTop:"2px",
        background:"#6c7075",
     }}>
     
  <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image = "https://media.gettyimages.com/photos/india-gate-picture-id75941865?s=612x612" alt="India Gate" />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">INDIA GATE
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway.
          </Typography>
        </CardContent>
      </CardActionArea>     
      </Card>

 {/* card 2 */}

 <Card style={{
       width:"30%",
        marginTop:"2px",
        background:"#6c7075",
     }}>
 <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.holidify.com/images/cmsuploads/compressed/Taj_Mahal_20180814141729.png"
          alt="taj mahal"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            TAJ MAHAL
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Taj Mahal, is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. 
          </Typography>
        </CardContent>
      </CardActionArea>
</Card>
     
     
 {/* card 3 */}


 <Card style={{
       width:"30%",
        marginTop:"2px",
        background:"#6c7075",
     }}>
<CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.treebo.com/blog/wp-content/uploads/2018/08/Red-Fort.jpg"
          alt="red fort"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            RED FORT
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Red Fort or Lal Qila (Hindustani: [laːlqiːlaː]) is a historic fort in Old Delhi, Delhi in India that served as the main residence of the Mughal Emperor
          </Typography>
        </CardContent>
      </CardActionArea>

      </Card>
    </Box>

    <Button className="btn" variant="contained" color="success" 
    style={{
      textAlign:'center',
      marginTop:"20px",
      marginLeft:"50%",
      justifyContent:"center",       

    }}>
    LEARN MORE          
       </Button>
    </div>
  );
}
