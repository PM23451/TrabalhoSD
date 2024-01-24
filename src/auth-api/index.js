const express = require('express');
const cors = require('cors');
const knexConfig = require('./knexfile').db;
const knex = require('knex')(knexConfig);
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    try {
        //Insert um user
        /*await knex('users').insert({
            username: 'gui13',
            password: '12345'
        });*/

        const user = await knex.select('*').from('users');
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
    }
});

//Post que recebe o username e password e insere na tabela users
app.post('/adduser', async (req, res) => {
    try {
        const { username, password } = req.body;
        await knex('users').insert({
            username,
            password
        });
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting data');
    }
});

//Post que recebe o username e password e verifica se existe na tabela users
app.post('/login', async (req, res) => {
    //res.status(200).send('valoraleatorio');
    try {
        const { username, password } = req.body;
        console.log(username);
        console.log(password);
        const user = await knex('users').where({
            username,
            password
        }).select('username', 'password');
        if (user.length > 0) {
            // Criar token
            // const token = jwt.sign({ username }, process.env.TOKEN_SECRET);
            //const token = "login feito com sucesso";
            //process.env.AUTH_JWT_SECRET
            const token = jwt.sign({ username },"65b187c77dc34", { expiresIn: '1h' });

            // Converter em JSON e enviar
            const jsonToken = JSON.stringify(token);

            res.status(200).send(jsonToken);
        } else {
            // Se não houver usuário, retornar status 401 (Não autorizado)
            res.sendStatus(401);
        }

    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting data');
    }
});

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) return res.status(401).send('Access denied');

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};

// Exemplo de uso:
app.get('/secure-route', verifyToken, (req, res) => {
    // Se o token for válido, você pode acessar req.user para obter os dados do usuário.
    res.send('Rota segura');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
