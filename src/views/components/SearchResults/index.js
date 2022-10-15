import UserItem from "../UserItem";
// estilos
import "./styles.css"
export default function SearchResults({results}) {
    return (
        <div className="search-results">
            {results?.map(user => {
                return (
                    <UserItem key={user.id} user={user}/>
                )
            })}
        </div>
    );
}