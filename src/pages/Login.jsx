import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../services/api";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function fazerLogin(event) {
        event.preventDefault();
        setErro("");

        if (!email || !senha) {
            setErro("Digite seu e-mail e sua senha.");
            return;
        }

        setCarregando(true);

        try {
            const resposta = await api.post("/users/login", {
                email,
                password: senha,
            });

            localStorage.setItem("token", resposta.data.token);
            navigate("/home");
        } catch (error) {
            if (error.response) {
                setErro(
                    error.response.data?.message ||
                    "E-mail ou senha inválidos."
                );
            } else {
                setErro("Não foi possível conectar à API.");
            }
        } finally {
            setCarregando(false);
        }
    }

    return (
        <main className="login">

            <div className="login-container">

                <div className="login-formulario">

                    <h2>Entre na sua conta</h2>

                    <form onSubmit={fazerLogin}>

                        <div className="campo">
                            <label htmlFor="email">
                                E-mail
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="senha">
                                Senha
                            </label>

                            <input
                                type="password"
                                id="senha"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(event) => setSenha(event.target.value)}
                            />
                        </div>

                        <div className="opcoes-login">
                            <Link to="/recuperar-senha">
                                Esqueci minha senha
                            </Link>
                        </div>

                        {erro && (
                            <p className="mensagem-erro">
                                {erro}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="botao-login"
                            disabled={carregando}
                        >
                            {carregando ? "Entrando..." : "Entrar"}
                        </button>

                    </form>

                    <p className="cadastro">
                        Ainda não possui uma conta?

                        <Link to="/cadastro">
                            Criar conta
                        </Link>
                    </p>

                </div>

            </div>

        </main>
    );
}

export default Login;
