import UserItem from "../UserItem";
// estilos
import "./styles.css"
export default function SearchResults({results, isSearching}) {
    return (
        <div className="search-results">
            {
                results.length === 0 && isSearching && 
                <div className="empty">No hay resultados</div>
            }
            {
                results?.map(user => {
                    return (
                        <UserItem key={user.id} {...user}/>
                    )
                })
            }
        </div>
    );
}