import React from "react";
import {Box} from "@mui/material";
import BodyPart from "./BodyPart";

import {ScrollMenu} from "react-horizontal-scrolling-menu";
// import ExerciseCard from "./ExerciseCard"
// import Right from '../Assests/Image/Right.jpg';
// import Left from "../Assests/Image/Left.jpg";


// const LeftArrow=()=>{
//     const {scrollPrev} =useContext(VisibilityContext);

//     return(
//         <Typography onClick={()=>scrollPrev()} className="right-arrow">
//             <img src={Left} alt='right-arrows'/>
//         </Typography>
//     );
// };

// const RightArrow=()=>{
//     const {scrollNext} =useContext(VisibilityContext);

//     return(
//         <Typography onClick={()=>scrollNext()} className='left-arrow'>
//             <img src={Right} alt='left-arrows'/>
//         </Typography>
//     )
// }

const HorizontalScrollbar =({data,bodyPart,setBodyPart})=>{
    return(
        <ScrollMenu>
            {data.map((item)=>(
                <Box
                key={item.id||item}
                itemId={item.id||item} 
                title={item.id||item}>
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar;