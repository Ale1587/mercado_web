const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.listen(3000, () => console.log('Server 3000 ON'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/bootstrapJS', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))
app.use(express.static(__dirname + '/assets/img'))


app.set('view engine', 'handlebars')
app.engine(
    'handlebars',
    exphbs.engine({
        layoutsDir: __dirname + '/views',
        partialsDir:__dirname + '/views/partials'
    })
)

app.get('/', (req, res) => {
    res.render("dashboard", { 
        layout: 'dashboard',
        products:['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate']
    })
})