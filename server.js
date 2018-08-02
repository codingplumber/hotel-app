const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Jason', lastName: 'Stickel'},
        {id: 2, firstName: 'John', lastName: 'Doe'},
        {id: 3, firstName: 'Jane', lastName: 'Doe'},
    ];

    res.json(customers);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));