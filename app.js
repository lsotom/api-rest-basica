// API de Productos CRUD
const express = require('express')
const app = express()

app.use(express.json())

let productos = []

// Método Get de HTTP para consultar
app.get('/productos', (req, res) => {
    res.json(productos)
})

// Método POST para crear
app.post('/productos', (req, res) => {
    const producto = req.body
    producto.id = productos.length + 1
    productos.push(producto)
    res.json(producto)
})

// Método PUT para actualizar
app.put('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const producto = productos.find(p => p.id === id)
    
    if(producto) {
        const nuevoProducto = req.body
        producto.nombre = nuevoProducto.nombre
        res.json(producto)
    }
    else {
        res.status(404).send('Producto no encontrado')
    }
})


// Método DELETE del protocolo HTTP para eliminar
app.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    productos = productos.filter((p => p.id != id))
    res.send('Eliminado')
})


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})

