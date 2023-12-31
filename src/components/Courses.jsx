import React, { useState, useEffect } from 'react'
import { 
    CardActionArea, 
    CardActions,
    Typography,
    CardMedia,
    CardContent,
    Card,
} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

function Courses({course}) {
    const navigate = useNavigate();
    const handleOpenCourse = () => {
        if (course.id > 0) 
          {navigate(`/course/${course.id}`);
          }
      };

  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={course.picture}
                    alt="green iguana"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {course.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {course.description}
                        </Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    variant="outline-info"
                    className="w-100"
                    onClick={handleOpenCourse}
                >
                    ПОДРОБНЕЕ
                </Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default Courses