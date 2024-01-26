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
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

function ListarCrash() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [crashes, setCrashes] = useState([]);
    //Verificar se tem token
    if(document.cookie.indexOf("token") === -1){
        window.location.href = "/login";
    }

    useEffect(() => {
        fetch("http://localhost:8080/crashes/")
          .then((res) => res.json())
          .then((res) => {
              setCrashes(res);
          });
    }, []);

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
                    Listar Crashes
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Vehicle Type 1</TableCell>
                                <TableCell>Vehicle Type 2</TableCell>
                                <TableCell>Vehicle Type 3</TableCell>
                                <TableCell>Crash Date</TableCell>
                                <TableCell>On Street Name</TableCell>
                                <TableCell>Number of Persons Injured</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {crashes.map((crash) => (
                              <TableRow key={crash.id}>
                                  <TableCell>{crash.vehicleTypeCode1}</TableCell>
                                  <TableCell>{crash.vehicleTypeCode2}</TableCell>
                                  <TableCell>{crash.vehicleTypeCode3}</TableCell>
                                  <TableCell>{crash.crashDate}</TableCell>
                                  <TableCell>{crash.onStreetName}</TableCell>
                                  <TableCell>{crash.numberofPersonsInjured}</TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}

export default ListarCrash;
