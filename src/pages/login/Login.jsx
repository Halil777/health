import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <>
      <div className="login_container">
        <div className="login_form">
          <h2 className="login_title">Girmek</h2>
          <input type="text" placeholder="Ulanyjy ady ..." />
          <input type="email" placeholder="Ulanyjy poçtasy ..." />
          <input type="password" placeholder="********" />
          <button className="login_button" onClick={handleLogin}>
            Girmek
          </button>
        </div>
      </div>
      <div className="form_picture">
        <img src="/images/login1.png" alt="form picture" />
      </div>
      <img src="/images/login2.png" className="login_image" alt="" />
    </>
  );
};

export default Login;
