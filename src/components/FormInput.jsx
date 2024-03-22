import PropTypes from "prop-types";

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </label>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  size: PropTypes.string,
};

export default FormInput;
