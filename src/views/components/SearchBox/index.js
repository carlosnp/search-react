import { useState } from "react";
import "./styles.css";

export default function SearchBox() {
     /** Variable para el campo de busqueda */
    const [searchText, setSearchText] = useState('');
    /**
     * Obtiene los datos del formulario
     * @param {*} event 
     */
    const handleSubmit = (event) => {
        const data = new FormData(event.target);
        /** Datos del formulario */
        const formObject = Object.fromEntries(data.entries());
        console.log('formObject', formObject);
        event.preventDefault();
    }
    return (
        <div className="search-box">
            <h2 className="search-box-title">Buscador personal</h2>
            <form className="search-box-form" onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input type="text"
                        className="search-box-input"
                        value={searchText || ''}
                        onChange={({target: { value }})=> setSearchText(value)}
                    />
                </label>
                <button>Buscar</button>
                <button>Cerrar</button>
            </form>
            <div>{searchText}</div>
        </div>
    );
}