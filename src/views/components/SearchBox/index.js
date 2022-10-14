import { useState } from "react";
import "./styles.css";

export default function SearchBox({onSearch, onClose}) {
     /** Variable para el campo de busqueda */
    const [searchText, setSearchText] = useState('');
    /** Cerrar buscador */
    const handleClose = (event) => {
        setSearchText("");
        onClose();
        event.preventDefault();
    };
    /** Buscar elementos */
    const handleSearch = (event) => {
        onSearch();
        console.log('text', searchText);
        event.preventDefault();
    }
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
            <div className="search-box-form">
                <label htmlFor="">
                    <input type="text"
                        className="search-box-input"
                        value={searchText || ''}
                        onChange={({target: { value }})=> setSearchText(value)}
                    />
                </label>
                <button onClick={handleSearch}>Buscar</button>
                <button onClick={handleClose}>Cerrar</button>
            </div>
            <div>{searchText}</div>
        </div>
    );
}