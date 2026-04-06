const StatisticLine = ({text, value})=>{
    return (
        // <div>{text} {value}</div>
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
};

export default StatisticLine;