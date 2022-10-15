import { useState } from "react";
// Componentes
import SearchBox from "../../components/SearchBox"
import SearchResults from "../../components/SearchResults";
// estilos
import "./styles.css"
// Data
import data from "../../../data/users.json"
/**
 * Componente Search
 */
export default function Search() {
    // Variable para saber si colocamos arriba el componente de busqueda
    const [isAtTop, setIsAtTop] = useState(false);
    const [results, setResults] = useState([]);
    // Cerrar busqueda
    const handleCloseClick = ()=> {
        setIsAtTop(!isAtTop);
        setResults([]);
    };
    // Determina si se encuentra el valor de la busqueda en la propiedad
    const findProperty = (propertyValue, value) => {
        const property = propertyValue.toLowerCase();
        const valueLower = value.toLowerCase();
        return property.includes(valueLower);
    }
    // Filtrar usuarios
    const handleSearchClick = (text)=> {
        if (!isAtTop) { setIsAtTop(true); }
        if (data?.length) {
            const filtered = data.filter(value =>
                (
                    findProperty(value.name, text) ||
                    findProperty(value.email, text) ||
                    findProperty(value.phone, text) ||
                    findProperty(value.username, text)
                )
            )
            setResults(filtered)
        }
    };
    return (
        <div className={`search ${isAtTop ? "search--top": "seacrh--center"}`}>
            <SearchBox
                // Variables para recibir del hijo 
                onSearch={handleSearchClick} 
                onClose={handleCloseClick}
            />
            <SearchResults
                // Le pasamos la lista al hijo
                results={results}
            />
        </div>
    );
}