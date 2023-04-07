import React from "react";
import {Box,Typography,Button} from "@mui/material";
import second from "../Assests/Image/second.jpg";

const HeroBanner=()=>{
    return(
        <Box sx={{
            mt:{lg:'212px',xs:'70px'},
            ml:{sm:'50px'}
        }} position='relative' p="10px">
            <Typography color="#ff2625"
            fontWeight='600' fontSize='26px'>
                Fitness Club
            </Typography>
            <Typography fontWeight='700'
            sx={{fontSize:{lg:'44px',xs:'40px'}}}
            mb="23px" mt="30px">
                Sweat Smile <br/> and Repeat
            </Typography>
            <Typography fontSize='22px'
            lineheight='35px' mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button variant='conatined' sx={{backgroundColor:'#ff2625'}}>Explore Exercises</Button>
            <Typography fontWeight={600}
            color="#ff2625"
            sx={{display:{lg:'block',xs:'none'},
            opacity:'0.1',top:'100px'}}
            fontSize='160px' mt='-20px'>Exercises</Typography>
            <img src={second} alt='gym-image1' className="image-set"/>
        </Box>
    )
}

export default HeroBanner;