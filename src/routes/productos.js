const express = require('express')
const router = express.Router()

let productos = []

// Método Get de HTTP para consultar
router.get('/', (req, res) => {
    res.json(productos)
})

// Método POST para crear
router.post('/', (req, res) => {
    const producto = req.body
    producto.id = productos.length + 1
    productos.push(producto)
    res.json(producto)
})

// Método PUT para actualizar
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    productos = productos.filter((p => p.id != id))
    res.send('Eliminado')
})

module.exports = router