import "./Login.css";

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Jardim Secreto</h1>
                <h2>Entrar</h2>

                <form>
                    <label>E-mail</label>
                    <input type= "email" placeholder="Digite seu e-mail" />
                
                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" />

                <button type="submit">Entrar</button>
                </form>

                <p>Não possui uma conta? <a href="/cadastro">Cadastra-se</a></p>

            </div>
        </div>
    );
}