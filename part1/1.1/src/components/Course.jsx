import Total from "../Total";
import Header from "./Header";
import Part from "./Part";
const Course = ({course})=>{
    
    return(
        <>
        <Header course={course}/>
        {course.parts.map((part)=>(
            <Part key={part.id} part={part}/>
        ))}

        <Total course={course}/>
        
        </>
    )
};

export default Course;