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
        if (!text) { setResults([]); }
        if (data?.length && text) {
            // Filtramos la lista por nombre, correo, telefono y username
            const filtered = data.filter(value =>
                (
                    findProperty(value.name, text) ||
                    findProperty(value.email, text) ||
                    findProperty(value.phone, text) ||
                    findProperty(value.username, text)
                )
            )
            // Ordenamos la lista por nombre
            const order = filtered.sort(function(a,b){
                return a.name.localeCompare(b.name);
            })
            setResults(order)
        }
    };
    return (
        <div className={`search ${isAtTop ? "search--top": "seacrh--center"}`}>
            <SearchBox
                // Recibimos si le dieron click al boton buscar
                onSearch={handleSearchClick} 
                // Recibimos si le dieron click al boton cerrar
                onClose={handleCloseClick}
                // Indicamos si se muestra el boton de cerrar
                isSearching={isAtTop}
            />
            <SearchResults
                // Le pasamos la lista al hijo
                results={results}
                // Le indicamos si se inicio la busqueda
                isSearching={isAtTop}
            />
        </div>
    );
}