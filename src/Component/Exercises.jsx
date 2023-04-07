import React,{useState,useEffect} from "react";
import Pagination from "@mui/material/Pagination";
import {Box,Stack,Typography} from "@mui/material";
import ExerciseCard from "./ExerciseCard";
// import {exerciseOptions,fetchData} from '../utils/FetchData';


const Exercises =({exercises,setExercises,bodyPart})=>{
    // console.log(exercises);
    const [currentPage,setUpdatedPage] =useState(1);
    const exercisesPerPage=9;

    const indexOfLastExercise =currentPage*exercisesPerPage;
    const indexOfFirstExercise=indexOfLastExercise-exercisesPerPage;

    const currentExercises=exercises.slice(indexOfFirstExercise,indexOfLastExercise);

    const Paginate=(e,value)=>{
        setUpdatedPage(value)
        window.scrollTo({top:1800,behaviour:'smooth'})
    }

    // useEffect(()=>{
    //     const fetchExercisesData =async()=>{
    //         let exercisesData=[];

    //         if(bodyPart==="all"){
    //             exercisesData =await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exerciseOptions);
    //         }
    //         else{
    //             exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
    //         }
    //         setExercises(exercisesData);
    //     }
    //     fetchExercisesData()
    // },[bodyPart])
    return(
        <Box id='exericse'
        sx={{mt:{lg:"110px"}}}
        mt='50px'
        p='20px'
        >
            <Typography variant='h3' mb="46px">Showing Results</Typography>
            <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}}
            flexWrap="wrap" justifyContent="center" >
                {currentExercises.map((exercise,index)=>(
                <ExerciseCard key={index} exercise={exercise}/>
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length>9&& (
                    <Pagination
                    color="standard"
                    shape="standard"
                    alignItem="center"
                    justifyContent="center"
                    display="flex"
                    defaultPage={1}
                    count={Math.ceil(exercises.length/exercisesPerPage)}
                    Page={currentPage}
                    onChange={Paginate}
                    size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises;