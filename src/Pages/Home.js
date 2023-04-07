import React,{useState} from "react";
import {Box} from "@mui/material";
import HeroBanner from "../Component/HeroBanner";
import SearchExercises from "../Component/SearchExercises";
import Exercises from "../Component/Exercises";

const Home=(event)=>{
    const [bodyPart,setBodyPart] =useState('all');
    const [exercises,setExercises]=useState([]);
    

    // console.log(bodyPart);

    return(
        <Box>
            <HeroBanner/>
            <SearchExercises
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}/>
            <Exercises
            exercises={exercises}
            setExercises={setExercises}
            bodyPart ={bodyPart}
            />
        </Box>
    )
}

export default Home;