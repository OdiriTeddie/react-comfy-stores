import PropTypes from "prop-types";

const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize"> {label} </span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};

FormCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  defaultValue: PropTypes.string,
};
export default FormCheckbox;
