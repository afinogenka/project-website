import React, { useEffect, useState } from "react";
import AuthDetails from '../components/AuthDetails';
import {db} from "../firebase";
import {collection, getDocs} from 'firebase/firestore';
import Courses from "../components/Courses";
import {Grid, Typography, Paper, Container} from "@mui/material";
import Header from "../components/Header";

const CatalogPage = () => {
  const [courses, setCourses] = React.useState([]);
  const coursesCollectionRef = collection(db, "courses");
  useEffect(() => {
    const getCourses = async () => {
      const data = await getDocs(coursesCollectionRef);
      setCourses(data.docs.map((doc) => ({...doc.data(), id: doc.id })))

    };

    getCourses();

  }, [])
  return (
    <div>
      <Header/>
      <Container>
        <Grid container spacing={3}
            display="flex"
            justify="center"
            paddingTop={3}

          >
          {courses.map(course => (
            <Grid item key={course.id} xs={12} md={6} lg={4} align='center'>
              <Courses course={course}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default CatalogPage