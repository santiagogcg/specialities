const express = require("express");
const app = express();

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

const marketing = usersData.filter(element =>
    element.specialty === 'marketing'
)

const marketingString = "marketing";

const developers = usersData.filter(element =>
    element.specialty === 'developers'
)

const developersString = "developers";

const QAs = usersData.filter(element =>
    element.specialty === 'QAs'
)

const QAsString = "QAs";

const ventas = usersData.filter(element =>
    element.specialty === 'ventas'
)

const ventasString = "ventas";

function especialidad(a, b) {
    app.get(`/${b}`, (req, res) => {
        res.write(`<!DOCTYPE html><html lang="es"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Specialities </title><link rel="stylesheet" href="./css/styles.css"></head>`);
        res.write(`<h1>Especialidad  ${b} </h1> <a href="/">home  </a> <p>Cantidad con especialidad ${b}:${a.length}<\p>`);
        for (i = 0; i < a.length; i++) {
            res.write(`<li>${a[i].name}   ${a[i].age} años</li>`)
        }

    })
}



app.get('/', (req, res) => {
    res.write('<!DOCTYPE html><html lang="es"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Specialities</title><link rel="stylesheet" href="./css/styles.css"></head>')

    res.write('<h1>Página principal</h1> <a href="/marketing">marketing </a><a href="/developers">developers </a><a href="/QAs">QAs </a><a href="/ventas">ventas </a>')


});





especialidad(marketing, marketingString);

especialidad(developers, developersString);

especialidad(QAs, QAsString);

especialidad(ventas, ventasString);




app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1><a href="/">Página principal</a>')
})

app.listen(5000, () => {
    console.log('Escuchando express.js en puerto 5000')
    console.log(marketing[0].age)
})


