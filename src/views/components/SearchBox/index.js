import { useState } from "react";
import "./styles.css";

export default function SearchBox({onSearch, onClose}) {
     /** Variable para el campo de busqueda */
    const [searchText, setSearchText] = useState('');
    /** Cerrar buscador */
    const handleClose = (event) => {
        // Limpiamos el campo de texto
        setSearchText("");
        // Actualizamos onClose
        onClose();
        // Evitamos que reconstruya la pagina
        event.preventDefault();
    };
    /** Buscar elementos */
    const handleSearch = (event, text) => {
        // Si existe el texto, actualizamos onSearch
        if (text) { onSearch(text) }
        // Evitamos que reconstruya la pagina
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
                <button onClick={(event) => handleSearch(event, searchText)}>Buscar</button>
                <button onClick={handleClose}>Cerrar</button>
            </div>
        </div>
    );
}