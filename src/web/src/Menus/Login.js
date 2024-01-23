import React, {useEffect, useState} from "react";
import {Box, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

//Login

function Login() {
    //Consultar a API http://localhost:18080/login
    const [login, setLogin] = useState(null);

    const [username, setUsername] = useState("");

    return (
        <container>
            <h1>Login</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </container>
    );
}

export default Login;

