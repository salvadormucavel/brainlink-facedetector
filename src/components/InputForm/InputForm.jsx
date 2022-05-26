import React from "react";
import './css/InputForm.css'

const InputForm = ({onInputChange}) =>{
    return(
        <div className="inputContainer">
            <div className="textForm white">
                <p>Este Cérebro irá detectar rostos em sua foto. Tente abaixo.</p>
            </div>
            <div className="inputForm shadow-1">
                <input type="text" placeholder="Cole o link da imagem aqui" required onChange={onInputChange}/>
                {/* <button disable="true">Detectar</button> */}
            </div>
        </div>
    );
}
export default InputForm;