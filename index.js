const express = require('express')
const app = express()
const port = 9900
var cors = require('cors')
const router = require(__dirname+'/routes/index');

// Configuraciones
app.set('port', process.env.PORT || port);
app.set('json spaces',2)
app.use(express.json());
app.use(express.urlencoded({extended: false}))

var corsOptions = {
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))
app.use('/api', router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
