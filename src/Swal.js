import Swal from 'sweetalert2'

export function esperarUpdate (){
    return Swal.fire("Un momento porfavor ...");
}
export function cargaOk (mensaje){
    return Swal.fire({
        // position: "top-end",
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
    });
}
