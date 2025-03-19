import Swal from "sweetalert2";

const UnexpectedError = ({ error }) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: error,
  });
};

export default UnexpectedError;
