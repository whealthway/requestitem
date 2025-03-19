import Swal from "sweetalert2";
const showNoDataAlert = () => {
  Swal.fire({
    icon: "warning",
    title: "No Data Found",
    customClass: {
      popup: "w-80", // Adjust width
      title: "text-lg p-0",
      content: "text-base",
      icon: "w-16 h-16",
    },
  });
};

export default showNoDataAlert;
