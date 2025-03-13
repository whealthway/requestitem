import React from "react";
import Swal from "sweetalert2";

const UnexpectedError = ({ error }) => {
  Swal.fire({
    title: `Unexpected error: ${error.message || error}`,
    icon: "error",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Okay",
  });
};

export default UnexpectedError;
