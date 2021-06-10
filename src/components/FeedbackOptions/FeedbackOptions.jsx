import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="Statistics__list">
      {Object.keys(options).map(elm => (
        <li key={elm} className="Statistics__item">
          <button
            className="Statistics__button"
            type="button"
            name={elm}
            onClick={onLeaveFeedback}
          >
            {elm}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.object.isRequired,
};
export default FeedbackOptions;
