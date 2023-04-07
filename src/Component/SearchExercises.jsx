import React,{useEffect,useState} from "react";
// import {Box,Stack,Button,Typography,TextField} from "@mui/material";
// import {exerciseOptions,fetchData} from '../utils/FetchData';
// import HorizontalScrollbar from "./HorizontalScrollbar";


const SerachExercises=({setExercises,bodyPart,setBodyPart})=>{
//     const[search,setSearch] =useState('');
//     const [bodyParts,setBodyParts] =useState([]);

//     useEffect(()=>{
//         const fetchExercisesData =async()=>{
//             const bodyPartsData =await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);

//             setBodyParts(['all',...bodyPartsData]);
//         }
//         fetchExercisesData();
//     },[])

//     const handlesearch =async()=>{
//         if(search){
//             const exercisesData =await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
//             console.log(exercisesData);

//             const searchedExercises =exercisesData.filter((exercise)=> exercise.name.toLowerCase().includes(search)
//             || exercise.target.toLowerCase().includes(search)
//             || exercise.equipment.toLowerCase().includes(search)
//             || exercise.bodyPart.toLowerCase().includes(search));

//         setSearch('');
//         setExercises(searchedExercises);
//         }; 
//     }
//     return(
//         <Stack alignItem='center' mt='10px'
//         justifyContent='center' p='20px'>
//             <Typography fontWeight={800} sx=
//             {{fontsize:{lg:'44px',xs:'30px'}}} mb='50px' textAlign='center'>Awesome Exercises You<br/>Should Know</Typography>
//             <Box position='relative' mb='72px'>
//                 <TextField
//                 sx={{input:{
//                     fontWeight:'700',
//                     border:'none',
//                     borderRadius:'4px',
//                     alignContent:'center',
//                     jusytifyContent:'center',
//                 }, width:{lg:'800px',xs:'350px'},
//             backgroundColor:'#fff',
//         borderRadius:'40px'}}
//                 height='76px'
//                 value={search}
//                 placeholder='Search-Exercises'
//                 onChange={(e)=>setSearch(e.target.value.toLowerCase())}
//                 type='text'
//                 />
//                 <Button className='search-btn'
//                 sx={{
//                     color:'#fff',
//                     bgcolor:'#ff2625',
//                     textTransform:'none',
//                     width:{lg:'175px',xs:'80px'},
//                     fontSize:{lg:'20px',xs:'10px'},
//                     height:'56px',
//                     position:'absolute',
//                     right:'470px',
//                 }}
//                 onClick={handlesearch}>Search</Button>
//             </Box>
//             <Box sx={{position:'relative',width:'100%',p:'20px'}}>
//                 <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} /> 
//             </Box>
//         </Stack>
//     )
}

export default SerachExercises;