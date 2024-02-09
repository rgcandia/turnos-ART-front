import style from './Print.module.css'
import autoTable from 'jspdf-autotable';
import { IoPrintSharp } from "react-icons/io5";
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';

function Print() {
    const { users, horas } = useSelector(state => state.data);
    const doc = new jsPDF();
      // Configurar el estilo para el texto en todas las columnas
      const columnTextStyle = { align: 'rigth' };
      const handlePDF = () => {
        autoTable(doc, {
            head: [['Nombre Completo', 'Horario Reservado']],
            body: [],
        });

        users.forEach((usuario) => {
            const horaReservada = horas.find(hora => hora?.id === usuario.turno);
            const horario = horaReservada ? horaReservada.hora : 'NO';
            
            // Agregar fila sin estilos específicos
            doc.autoTable({ body: [[usuario.name, horario]] });
        });
    
        doc.save('turnos.pdf');
    };
    
    
    

    return (
        <div >
            <button onClick={handlePDF} className={style.descargar}>
                Descargar Turnos PDF
            </button>
        </div>
    );
}
export default Print;