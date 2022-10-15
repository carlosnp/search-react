// estilos
import "./styles.css"
export default function UserItem({user}) {
    return (
        <div className="user-data">
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.username}</div>
        </div>
    );
}