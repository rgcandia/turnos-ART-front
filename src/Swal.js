import Swal from 'sweetalert2'

export function esperarUpdate (){
    return Swal.fire({
        title:"Un momento porfavor ...",
        confirmButtonColor:'#0c3f5c'
    });
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
