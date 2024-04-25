/*import logo from './logo.svg';*/
import './App.css';
import Table from './Table.js';
// import Skill from './Skill.js';
import Count from './Count.js';
// import Button from './Button.js'
// import CrudOpt from './CrudOpt.js'
import Search from './Search.js';
// import Addlist from './Addlist.js';
import About1 from './About1.js'
import Dashboard from './Dashboard.js'
import Form from './Form.js'
import Home from './Home.js'
import Login from './Login.js'
import Product from './Product.js';
import { Route,Routes } from 'react-router-dom';

import  React from 'react';
import Data from './Data.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



function App() {
  const userDetail=[
    {
      name:"Suresh",
      age:23,
      department:"mechanical"
    },
    {
      name:"Amose",
      age:21,
      department:"mechanical"
    },
    { 
      name:"Ariharan",
      age:20,
      department:"mechanical"
    },
    
  ]
  return(
    <div>
      <Search/>
      <Count/>
      <Table user={userDetail}/>
    </div>
    
  //   <div>
  //     <Data/>
  //     <Button/>
  //     <CrudOpt/>
  //     <Form/>
  //     <div>
  //     <Routes>
  //      <Route path='/' element={<Login/>}/>
  //      <Route path='/home' element={<Home/>}/>
  //      <Route path='/about1' element={<About1/>}/>
  //      <Route path='/dashboard' element={<Dashboard/>}/>
  //      <Route path='/product' element={<Product/>}/>
  //      <Route path='/form' element={<Form/>}/>
  //    </Routes>
  //  </div>
    // <div>
    //   <Addlist/>
    // </div>
//  <>
//     <Container maxWidth="lg">
//       <Grid container spacing={5} style={{marginTop:"20px"}}>
//         {
//      Data.map((result,index)=>(


//       <Card sx={{ maxWidth: 345 }} style={{marginLeft:"20px", marginTop:"20px", marginLeft :"75px"}}>
//       <CardMedia
//         sx={{ height: 140,width:300 }}
//         image={result.img}
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {result.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {result.des}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   ))
// }  
// </Grid></Container>
//     </> 
    
  );
}


export default App;
