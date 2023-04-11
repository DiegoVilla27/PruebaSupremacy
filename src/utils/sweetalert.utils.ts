import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

// Show toast alert
export const showToast = (
  title: string,
  icon: SweetAlertIcon,
  position: SweetAlertPosition
) => {
	const Toast = Swal.mixin({
		toast: true,
		position,
		showConfirmButton: false,
		timer: 4000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});
	return Toast.fire({ icon, title });
};

// Show general alert
export const showAlert = (
  title: string,
  text: string,
  icon: SweetAlertIcon
) => {
	return Swal.fire({
		title,
		text,
		icon,
		confirmButtonText: 'Aceptar',
		confirmButtonColor: '#520018',
	});
};

// Show alert with question (T/F) and callbacks
export const showAlertQuestion = (
	title: string,
	text: string,
	icon: SweetAlertIcon,
	html: HTMLElement | string,
  confirmCallback: () => void,
  confirmButtonText: string = 'Aceptar',
  cancelCallback: () => void,
  cancelButtonText: string = 'Cancelar',
) => {
	return Swal.fire({
		title,
		text,
		icon,
		html: html ?? null,
		showCancelButton: true,
		confirmButtonText,
		confirmButtonColor: '#520018',
		cancelButtonText,
		cancelButtonColor: '#343444',
	}).then((result) => {
		if (confirmCallback && result.isConfirmed) confirmCallback();
		else if (cancelCallback && result.dismiss === Swal.DismissReason.cancel)
			cancelCallback();
	});
};

// Show alert loading
export const showLoading = (
  text: string = 'Cargando...'
) => {
	Swal.fire({
		allowOutsideClick: false,
		showCloseButton: false,
		icon: 'info',
		text,
	});
	Swal.showLoading();
};

// Hide alert loading
export const hideLoading = () => Swal.close();
