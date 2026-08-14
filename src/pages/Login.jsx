import "./Login.css";

function Login({ mudarTela }) {
  return (
    <div className="container">
      <div className="login-box">
        <h1>Login</h1>
        <p>Entre na sua conta</p>

        <form>
          <input type="email"
            placeholder="Digite seu e-mail"
          />

          <input type="password"
            placeholder="Digite sua senha"
          />

          <button type="submit">Entrar</button>
        </form>

        <p className="cadastro-link">
          Ainda não tem uma conta?{" "}
          <span onClick={() => mudarTela("cadastro")}>
            Cadastre-se
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
