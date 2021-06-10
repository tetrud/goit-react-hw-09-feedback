import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <p className="text__notification">{message}</p>
);

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
