import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Wrapper } from "./App.styled";


export const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const stateKeys = ["good", "neutral", "bad"];
  const stateValues = [good, neutral, bad];
  
  const countTotalFeedback = () => stateValues.reduce((a, b) => a + b, 0);
  
  const countPositiveFeedbackPercentage = () => Math.floor((Number(good) * 100) / countTotalFeedback());
 
  const handleClick = option => {
    switch (option) {
      case 'good': {
        setGood(prevState=>prevState+1);
        return;
      }
      case 'neutral': {
        setNeutral(prevState=>prevState+1);
        return;
      }
      case 'bad': {
        setBad(prevState=>prevState+1);
        return;
      }
      default:
        return;
    }
  };
  
    return (<Wrapper>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={stateKeys} onLeaveFeedback={handleClick} />
        </Section>
      <Section title={"Statistics"}>
        {countTotalFeedback() === 0 ? <Notification message="There is no feedback" /> : <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />}
      </Section>  
    </Wrapper>
    )
  
}

