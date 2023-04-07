import React,{useState,useEffect} from "react";
import {Box} from "@mui/material";
// import Detail from "../Component/Detail";
// import ExerciseVideo from "../Component/ExerciseVideo";
// import SimilarExercise from "../Component/SimilarExercise";
import { useParams } from "react-router-dom";
import {exerciseOptions,fetchData,youtubeOptions} from "../utils/FetchData";


const ExerciseDetail=()=>{
    // const [exerciseDetail,setExerciseDetail]=useState({});
    // const [exerciseVideos,setExerciseVideos] =useState([]);
    // const [targetMuscleExercises,setTargetMuscleExercises]=useState([]);
    // const [equipmentExercises,setEquipmentExercises] =useState([]);
    const {id}=useParams();

    // useEffect(()=>{
        // const fetchExercisesData =async()=>{
            // const exerciseDbUrl ="https://exercisedb.p.rapidapi.com";
            // const youtubeSearchUrl ="https://youtube-search-and-download.p.rapidapi.com";

            // const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);

            // setExerciseDetail(exerciseDetailData);

            // const exercisevideosData=await fetch(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
            // setExerciseVideos(exercisevideosData.contents);

            // const targetMusclesExercisesData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
            // setTargetMuscleExercises(targetMusclesExercisesData);

            // const equipmentExercisesData=await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
            // setEquipmentExercises(equipmentExercisesData);
        // }
        // fetchExercisesData();
    // },[id])

    return(
        <Box>
            {/* <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/> */}
        </Box>
    )
}

export default ExerciseDetail;