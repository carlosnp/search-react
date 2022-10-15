import { useState } from "react";
import "./styles.css";

export default function SearchBox({onSearch, onClose, isSearching}) {
     /** Variable para el campo de busqueda */
    const [searchText, setSearchText] = useState('');
    /** Cerrar buscador */
    const handleClose = (event) => {
        // cancela el evento por defecto
        event.preventDefault();
        // Limpiamos el campo de texto
        setSearchText("");
        // Actualizamos onClose
        onClose();
    };
    /** Buscar elementos */
    const handleSearch = (event, text) => {
        // cancela el evento por defecto
        event.preventDefault();
        onSearch(text) 
    }
    return (
        <div className={`search-box ${isSearching ? 'sticky' :'normal'}`}>
            <h2 className="search-box-title">Buscador de personal</h2>
            <div className="search-box-form">
                <label htmlFor="">
                    <input type="text"
                        className="search-box-input"
                        value={searchText || ''}
                        onChange={({target: { value }})=> setSearchText(value)}
                    />
                </label>
                <button
                    onClick={(event) => handleSearch(event, searchText)}
                    disabled={!searchText.length}
                >Buscar</button>
                { 
                    isSearching &&  
                    <button 
                        onClick={handleClose}
                        disabled={!searchText.length}
                    >Cerrar</button>
                }
            </div>
        </div>
    );
}