import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import FreeMode from "swiper";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
// import CourseCard from "./CourseCard";
// import german from "../img/german.jpg";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Courses from "../components/Courses";


import {Grid} from "@mui/material";

const CoursesSlider = () => {
  const [courses, setCourses] = React.useState([]);
  const coursesCollectionRef = collection(db, "courses");
  useEffect(() => {
    const getCourses = async () => {
      const data = await getDocs(coursesCollectionRef);
      setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCourses();
  }, []);

  return (
    <div className="container py-4 px-4 justify-content-center">
      <Swiper
        freeMode={true}
        grabCursor={true}
        loop={true}
        modules={[FreeMode]}
        clasName="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {courses.map((course) => (
          <SwiperSlide>
              <Grid item key={course.id} xs={12} md={6} lg={4} align='center' height="100vh">
                <Courses course={course}/>
              </Grid>
          </SwiperSlide>
          // <Grid item key={course.id} xs={12} md={6} lg={4} align="center">
          //   <Courses course={course} />
          // </Grid>
        ))}

        {/* <SwiperSlide>
          <CourseCard
            data={{
              imgSrc: german,
              title: "Example Card",
              text: "This is an example React card",
              footertext: "Last updated 2 mins ago",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard
            data={{
              imgSrc: german,
              title: "Example Card",
              text: "This is an example React card",
              footertext: "Last updated 3 mins ago",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard
            data={{
              imgSrc: german,
              title: "Example Card",
              text: "This is an example React card",
              footertext: "Last updated 4 mins ago",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard
            data={{
              imgSrc: german,
              title: "Example Card",
              text: "This is an example React card",
              footertext: "Last updated 5 mins ago",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard
            data={{
              imgSrc: german,
              title: "Example Card",
              text: "This is an example React card",
              footertext: "Last updated 6 mins ago",
            }}
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default CoursesSlider;
