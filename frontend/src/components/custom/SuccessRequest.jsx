import Swal from "sweetalert2";

const SuccessRequest = () => {
  const success = Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
  return success;
};

export default SuccessRequest;
