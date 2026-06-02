const Total = ({ course }) => {
  let sumaTotal = course.parts.reduce((total, numero) => {
    return total + numero.exercises;
  }, 0);
  return <p> Number of exercises {sumaTotal}</p>;
};

export default Total;
