import StatisticLine from "./StatisticLine";
const Statistics = ({ good, neutral, bad }) => {
  
  const total = good + neutral + bad;

  if (total === 0) {
    return (
      <div>
          <p>No feedback given</p>
      </div>
    );
  }

  const valorPositive = (good / total) * 100;
  const valorAverage = (good - bad) / total;

  return (
    <table>
      <tbody>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"All"} value={total} />
        <StatisticLine text={"Average"} value={valorAverage} />
        <StatisticLine text={"Positive"} value={valorPositive} />
      </tbody>
    </table>
  );
};

export default Statistics;