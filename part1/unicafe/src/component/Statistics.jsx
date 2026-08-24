import {FEEDBACK_DEFAULT_STATE} from "../constants.js";

const StatisticLine = ({name, value}) => <tr style={{textAlign: 'left'}}>
    <td>{name}:</td>
    <td>{value}</td>
</tr>

export const Statistics = ({state}) => {
    const allScore = state.good + state.bad + state.neutral
    const averageScore = Math.ceil(allScore / Object.keys(FEEDBACK_DEFAULT_STATE).length)
    const positivePercent = allScore ? Math.ceil(state.good / allScore * 100) : 0

    return (
        <table>
            <tbody>
            {
                Object.keys(FEEDBACK_DEFAULT_STATE).map(key => (
                    <StatisticLine key={key} name={key} value={state[key]}/>
                ))
            }
            <StatisticLine name="All" value={allScore}/>
            <StatisticLine name="Average" value={averageScore}/>
            <StatisticLine name="Positive" value={positivePercent}/>
            </tbody>
        </table>
    )
}