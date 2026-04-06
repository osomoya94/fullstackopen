// import Header from "./Header";
// import Content from "./Content";
// import Total from "./Total";
import { useState } from "react";
// import Statistics from "./Statistics";
// import ButtonIncremental from "./ButtonIncremental";

function App() {
  // const course = {
  //   name: "Half Stack application development",
  //   parts: [
  //     {
  //       name: "Fundamentals of React",
  //       exercises: 10,
  //     },
  //     {
  //       name: "Using props to pass data",
  //       exercises: 7,
  //     },
  //     {
  //       name: "State of a component",
  //       exercises: 14,
  //     },
  //   ],
  // };

  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  // const incrementarGood = () => {
  //   setGood(good + 1);
  // };

  // const incrementarNeutral = () => {
  //   setNeutral(neutral + 1);
  // };

  // const incrementarBad = () => {
  //   setBad(bad + 1);
  // };

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const votosArray = [0, 0, 0, 0, 0, 0, 0, 0];

  const [selected, setSelected] = useState(0);
  const [votos, setVotos] = useState(votosArray);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomAnecdota = () => {
    setSelected(getRandomInt(0, 7));
  };

  const incrementaVotos = () => {
    const copia = [...votos];
    copia[selected] += 1;
    setVotos(copia);
  };

  const maxVotosIndex = votos.indexOf(Math.max(...votos)
)

  return (
    <>
      {/* <Header course={course} />
      <Content course={course} />
      <Total course={course} /> */}

      {/* <ButtonIncremental incrementa={incrementarGood} texto={"good"} />
      <ButtonIncremental incrementa={incrementarNeutral} texto={"neutral"} />
      <ButtonIncremental incrementa={incrementarBad} texto={"bad"} />
      <Statistics good={good} bad={bad} neutral={neutral} /> */}
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>votos de anecdota: {votos[selected]}</div>

      <button onClick={incrementaVotos}>Votos</button>
      <button onClick={randomAnecdota}>siguiente anecdota</button>

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[maxVotosIndex]}</div>
      <div>votos de anecdota: {votos[maxVotosIndex]}</div>

  
    </>
  );
}

export default App;
