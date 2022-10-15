// estilos
import "./styles.css"
export default function UserItem({name, username, email, phone}) {
    return (
        <div className="user-data">
            <div className="user-detail">
                <div>{name}</div>
                <div className="username">{username}</div>
            </div>
            <div className="user-detail">
                <div>Correo: {email}</div>
                <div className="username">Telefono: {phone}</div>
            </div>
        </div>
    );
}