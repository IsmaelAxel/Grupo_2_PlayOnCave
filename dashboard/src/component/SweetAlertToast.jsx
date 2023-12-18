import Swal from "sweetalert2";

export const SweetAlertToast = (message, alertType = "success") => {
  Swal.fire({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
    icon: alertType,
    title: message,
  });
};
