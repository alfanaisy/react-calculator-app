import PropTypes from 'prop-types';

export default function Button({ text, clickHandler, className }) {
  return (
    <button onClick={clickHandler} className={`${className}`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};
