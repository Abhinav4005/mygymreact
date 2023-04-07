import React from "react";
import {Box,Stack,Typography} from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercise=({targetMuscleExercises,equipmentExercises})=>{
    return(
        <Box sx={{mt:{lg:'100px', xs:'0'}}}>
            <Typography variant="h3" mb={5}>Exercises that target the same muscle group</Typography>
            <Stack direction="row" sx={{p:'2',position:'relative'}}>
                {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/>:<Loader/>}
            </Stack>
            <Typography variant="h3" mb={5}>Exercises that use the same equipment</Typography>
            <Stack direction="row" sx={{p:'2',position:'relative'}}>
                {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/>:<Loader/>}
            </Stack>
        </Box>
    )
}

export default SimilarExercise;