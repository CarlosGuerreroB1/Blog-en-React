import { useNavigate, Link } from "react-router-dom";
import "./register.css"


export default function Register() {
  const navigate = useNavigate();
  const handleRegister =(e)=>{
    e.preventDefault();
    navigate("/");}
    return (
        <div className="register">
      <span className="registerTitle">Registro</span>
      <form className="registerForm">
        <label>Usuario</label>
        <input className="registerInput" type="text" placeholder="Ingresa un usuario..." />
        <label>Correo</label>
        <input className="registerInput" type="text" placeholder="Ingresa un correo..." />
        <label>Contraseña</label>
        <input className="registerInput" type="password" placeholder="Ingresa una contraseña..." />
        <button className="registerButton" onClick={handleRegister}>Registrarse</button>
      </form>
        <button className="registerLoginButton"><Link to="/login" className="link">Iniciar</Link></button>
    </div>
    )
}