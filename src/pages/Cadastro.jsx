import "./Cadastro.css";

function Cadastro({ mudarTela }) {
  return (
    <div className="container">
      <div className="cadastro-box">
        <h1>Cadastro</h1>
        <p>Crie sua conta</p>

        <form>
          <input
            type="text"
            placeholder="Digite seu nome"
          />

          <input
            type="email"
            placeholder="Digite seu e-mail"
          />

          <input
            type="password"
            placeholder="Digite sua senha"
          />

          <input
            type="password"
            placeholder="Confirme sua senha"
          />

          <button type="submit">Cadastrar</button>
        </form>

        <p className="login-link">
          Já possui uma conta?{" "}
          <span onClick={() => mudarTela("login")}>
            Fazer login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
