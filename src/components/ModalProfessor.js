import React from 'react';
import '../styles.scss'
const ModalProfessor = ({onClose=() =>{},children}) => {



    return (
        <div className = "modal">
        <div className = "container">
            <button className = "close" onClick ={onClose}/>
                <div className = "content">{children}</div>
            </div>
         </div>
    );
}
export default ModalProfessor;