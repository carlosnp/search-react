import { useState } from "react";
import SearchBox from "../../components/SearchBox"
import "./styles.css"
/**
 * Componente Search
 */
export default function Search() {
    // Variable para saber si colocamos arriba el componente de busqueda
    const [isAtTop, setIsAtTop] = useState(false);
    // Click en centrar o colocar al centro el componente
    const handleButtonClick = ()=> { setIsAtTop(!isAtTop); };
    return (
        <div className={`search ${isAtTop ? "search--top": "seacrh--center"}`}>
            <SearchBox
                // Variables para recibir del hijo 
                onSearch={handleButtonClick} 
                onClose={handleButtonClick}
            />
        </div>
    );
}