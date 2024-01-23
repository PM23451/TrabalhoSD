import React, { useState } from "react";
import {
    Box,
    CircularProgress,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            //Debugguer

            console.log("user"+username);
            console.log("pass"+password);
            // Fazer a requisição para a API de login
            const response = await fetch("http://localhost:18080/login", {
                method: "POST", // ou "GET", dependendo da sua API
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data);
                // Lógica para tratamento de sucesso, por exemplo, salvar token no estado ou redirecionar para outra página
            } else {
                // Lógica para tratamento de erro
                console.error("Erro ao fazer login");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };

    return (
        <Container>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h1>{token}</h1>
            <h1>{username}</h1>
            <h1>{password}</h1>
        </Container>
    );
}

export default Login;
