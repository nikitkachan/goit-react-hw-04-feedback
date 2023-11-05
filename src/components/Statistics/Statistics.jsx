import { StyledUl } from "./Statistics.styled"


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <StyledUl>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: { positivePercentage  || 0 }%</li>
            </StyledUl>
        </div>
    )
}
