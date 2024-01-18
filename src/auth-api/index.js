const express = require('express');
const cors = require('cors');
const knexConfig = require('./knexfile').db;
const knex = require('knex')(knexConfig);

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
    try {
        //Insert um user
        /*await knex('users').insert({
            username: 'user',
            password: 'pass'
        });*/

        const teachers = await knex.select('*').from('users');
        res.json(teachers);
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
    try {
        const { username, password } = req.body;
        const user = await knex('users').where({
            username,
            password
        }).select('username', 'password');
        if (user.length > 0) {
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting data');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
