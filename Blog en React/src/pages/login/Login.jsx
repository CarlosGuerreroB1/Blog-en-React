import "./login.css";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin =(e)=>{
    e.preventDefault();
    navigate("/");
  }
  return (
    <div className="login">
      <span className="loginTitle">Inicio Sesion</span>
      <form className="loginForm">
        <label>Usuario</label>
        <input className="loginInput" type="text" placeholder="Ingresar Usuario..." />
        <label>Contraseña</label>
        <input className="loginInput" type="password" placeholder="Ingresar la Contraseña..." />
        <button className="loginButton" onClick={handleLogin}>Ingresar</button>
      </form>
        <button className="loginRegisterButton"><Link to="/register" className="link">Registro</Link></button>
    </div>
  );
}