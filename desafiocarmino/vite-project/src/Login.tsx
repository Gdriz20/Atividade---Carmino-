import "./cssLogin.css";

export default function Login(){
    return(
        <div className="page">
        <form method="POST" className="formLogin">
            <h1>Login</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" autofocus="true" />
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite seu e-mail" />
            <a href="/">Esqueci minha senha</a>
            <input type="submit" value="Acessar" className="btn" />
        </form>
    </div>
    )
}