import { useState } from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = event => {
    const name = event.target.name;

    setState(prevState => ({ ...state, [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    const totalFeedback = good + neutral + bad;

    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / countTotalFeedback());
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={state} onLeaveFeedback={handleIncrement} />
      <Statistics
        title="Statistics"
        options={state}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
}
