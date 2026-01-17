import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchData } from "../api";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ClipLoader } from "react-spinners";
import { Courses } from "../types";


function LessonCard(props: { courses: any; toggleLessonDetails: any; }) {
  const { courses, toggleLessonDetails } = props;
  if (!Array.isArray(courses)) return null;
  return courses.map((course, idx) => (
    <Card sx={{ minWidth: 275, mb: 2 }} key={course.id || idx}>
      <CardContent style={{position: 'relative', minHeight: '100px', backgroundColor: '#009689', color: '#e5f4f3'}}  onClick={() => toggleLessonDetails(course.id)}>
            <Typography gutterBottom sx={{ fontSize: 90 }} style={{position: 'absolute', zIndex: 1, opacity: 0.1, offset: '0px', top: '0px'}}>
                {course.id || 'Undefined Course Code'}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 20 }} style={{position: 'absolute', zIndex: 999, offset: '0px', top: '70px', fontWeight: 'bold'}}>
            {course.title || 'Untitled Course'}
            </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{course.provider || ''}</Typography>
      </CardContent>
      <Accordion sx={{ boxShadow: 'none' }}>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header" expandIcon={<ChevronDown />}>
          <Typography component="span">Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {course.description || 'No description.'}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  ));
}

export default function CoursesView(props: { toggleLessonDetails: any; }) {
    const { toggleLessonDetails } = props;
    const [data, setData] = useState<Courses>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchData('/student/student/courses')
        .then(data => {
          setData(Array.isArray(data) ? data : []);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }, []);

    if (loading) return <div className="fixed inset-0 flex items-center justify-center bg-white">
                            <ClipLoader 
                                color="#009689" 
                                loading={loading} 
                                size={150} 
                                aria-label="Loading Spinner" 
                                data-testid="loader" />
                        </div>
    if (error) return <p>Error loading data!</p>;
    return (
      <div className="p-4 pb-24 space-y-6">
        <h2 className="text-3xl font-bold">Lessons</h2>
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4 lg:justify-center lg:items-center">
          <LessonCard courses={data} toggleLessonDetails={toggleLessonDetails} />
        </div>
      </div>
    );
}