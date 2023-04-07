import React from "react";
import {Typography,Stack,Button} from "@mui/material";
import BodypartImage from "../Assests/Image/BodypartImage.png";
import TargetImage from "../Assests/Image/TargetImage.jpg";
import EquipmentImage from "../Assests/Image/EquipmentImage.png"
import "../App.css";

const Detail=({exerciseDetail})=>{
    const {bodyPart,name,gifUrl,target,equipment} =exerciseDetail;

    const extraDetail=[
        {
            icon:BodypartImage,
            name:bodyPart,
        },
        {
            icon:TargetImage,
            name:target,
        },
        {
            icon:EquipmentImage,
            name:equipment,
        }
    ]

    return(
        <Stack gap="60px" sx={{flexDirection:{lg:"row"},p:'20px',alignItems:'center'}}>
            <img src={gifUrl} alt={name} Loading="lazy" className="detail-image"/>
            <Stack sx={{gap:{lg:"35px",xs:'20px'}}}>
            <Typography variant="h3">
                {name}
            </Typography>
            <Typography variant="h6">
                Exercise keep you strong. {name} is one of the
                best exercises to target your {target}. It will help 
                you improve your mood and gain energy.
            </Typography>
            {extraDetail.map((item)=>(
                <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                    <Button sx={{background:"#fff2db",borderRadius:'50px',width:'100px',height:'100px'}}>
                        <img src={item.icon} alt={bodyPart} style={{width:'50px',height:'50px'}}/>
                    </Button>
                    <Typography variant="h5" textTransform="capitalize">
                        {item.name}
                    </Typography>
                </Stack>
            ))}
            </Stack>
        </Stack>
    )
}

export default Detail;