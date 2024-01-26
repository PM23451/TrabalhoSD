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

function InserirCrash() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    //Verificar se tem token
    if(document.cookie.indexOf("token") === -1){
        window.location.href = "/login";
    }
    const [vehicleTypeCode1, setVehicleTypeCode1] = useState("");
    const [vehicleTypeCode2, setVehicleTypeCode2] = useState("");
    const [vehicleTypeCode3, setVehicleTypeCode3] = useState("");
    const [crashDate, setCrashDate] = useState("");
    const [onStreetName, setOnStreetName] = useState("");
    const [number_of_persons_injured, setNumber_of_persons_injured] = useState("");


    const hadleInserirCrash = async (e) => {
        e.preventDefault();
        const data = {
            vehicleTypeCode1: vehicleTypeCode1,
            vehicleTypeCode2: vehicleTypeCode2,
            vehicleTypeCode3: vehicleTypeCode3,
            crashDate: crashDate,
            onStreetName: onStreetName,
            numberofPersonsInjured: parseInt(number_of_persons_injured),
        }
        try {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

            const response = await fetch("http://localhost:8080/crashes/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data ),
                //Permitir cors
                mode: 'cors',
            });

            if (response.ok) {
                if(response.status === 201){
                    alert("Crash inserido com sucesso");
                }
            } else {
                console.error("Erro ao inserir crash");
            }
        } catch (error) {
            console.error("Erro ao inserir crash:", error);
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
                    Adicione Acidente
                </Typography>
                <form onSubmit={hadleInserirCrash}>
                    <FormControl sx={{mt: 2, width: "100%"}} variant="outlined">
                        <InputLabel htmlFor="username">Veiculo 1</InputLabel>
                        <Input
                            id="vehicleTypeCode1"
                            name="vehicleTypeCode1"
                            type="text"
                            //value={text}
                            onChange={(e) => setVehicleTypeCode1(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl sx={{mt: 2, width: "100%"}} variant="outlined">
                        <InputLabel htmlFor="username">Veiculo 2</InputLabel>
                        <Input
                            id="vehicleTypeCode2"
                            name="vehicleTypeCode2"
                            type="vehicleTypeCode2"
                            //value={text}
                            onChange={(e) => setVehicleTypeCode2(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl sx={{mt: 2, width: "100%"}} variant="outlined">
                        <InputLabel htmlFor="username">Veiculo 3</InputLabel>
                        <Input
                            id="vehicleTypeCode3"
                            name="vehicleTypeCode3"
                            type="vehicleTypeCode3"
                            //value={text}
                            onChange={(e) => setVehicleTypeCode3(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl sx={{mt: 2, width: "100%"}} variant="outlined">
                        <InputLabel htmlFor="username">Data</InputLabel>
                        <Input
                            id="crashDate"
                            name="crashDate"
                            type="crashDate"
                            //value={text}
                            onChange={(e) => setCrashDate(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl sx={{mt: 2, width: "100%"}} variant="outlined">
                        <InputLabel htmlFor="username">Localizacao</InputLabel>
                        <Input
                            id="onStreetName"
                            name="onStreetName"
                            type="onStreetName"
                            //value={text}
                            onChange={(e) => setOnStreetName(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl sx={{mt: 2, width: "100%"}} variant="outlined">
                        <InputLabel htmlFor="username">Numero de feridos</InputLabel>
                        <Input
                            id="number_of_persons_injured"
                            name="number_of_persons_injured"
                            type="number_of_persons_injured"
                            //value={text}
                            onChange={(e) => setNumber_of_persons_injured(e.target.value)}
                            required
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, backgroundColor: "black", color: "white"}}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default InserirCrash;
