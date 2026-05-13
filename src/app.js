// API de Productos CRUD
const express = require('express')
const app = express()

const productosRoutes = require('./routes/productos')

app.use(express.json())

app.use('/productos', productosRoutes)

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})

