import PropTypes from 'prop-types';

import Notification from '../Notification';

const Statistics = ({ title, options, total, positivePercentage }) => {
  return (
    <div>
      <h2>{title}</h2>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <ul>
          {Object.entries(options).map(option => (
            <li key={option[0]} className="Statistics">
              {option[0]}: {option[1]}
            </li>
          ))}
          <li className="Statistics">total: {total}</li>
          <li className="Statistics">
            positive feedback: {positivePercentage}%
          </li>
        </ul>
      )}
    </div>
  );
};

Statistics.prototype = {
  options: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
