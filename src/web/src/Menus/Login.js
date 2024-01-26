import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
    Input,
    CircularProgress,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from "@mui/material";

//Login

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
                document.cookie = "token=" + data.token;
                window.location.href = "/listar-crash";
            } else {
                // Lógica para tratamento de erro
                console.error("Erro ao fazer login");
                alert("Erro ao fazer login");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };

    return (
        <Container>
            <Box
                sx={{
                    marginTop: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input
                            id="username"
                            name="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: "black", color: "white" }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default Login;
