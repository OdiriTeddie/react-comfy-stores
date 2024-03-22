import { useNavigation } from "react-router-dom";
import PropTypes from "prop-types";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block uppercase"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner">sending...</span>
        </>
      ) : (
        text || "Submit"
      )}
    </button>
  );
};

SubmitBtn.propTypes = {
  text: PropTypes.string,
};

export default SubmitBtn;
