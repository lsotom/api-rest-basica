const express = require('express')
const router = express.Router()

const productoModel = require('../models/productoModel')

// Método Get de HTTP para consultar
router.get('/',  (req, res) => {
    
    productoModel.obtenerProductos((error, resultados) => {

        if(error) {
            res.status(500).send({error: 'Error consultando los productos'})
        }
        else {
            res.json(resultados)
        }

    })

})

// Método POST para crear
router.post('/', (req, res) => {
    const producto = req.body
    
    productoModel.crearProducto(producto, (error, resultado) => {

        if(error) {
            res.status(500).send({error: 'Error creando el producto'})
        }
        else {
            producto.id = resultado.insertId

            res.status(201).json(producto)
        }
    })

})

// Método PUT para actualizar
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    
    const producto = req.body
    
    productoModel.actualizarProducto(id, producto, (error, resultado) => {

        if(error) {
            res.status(500).send({ error: 'Error actualizando el producto'})
        }
        else {

            if(resultado.affectedRows === 0) {
                res.status(404).send({ error: 'Producto no encontrado'})
            }
            else {
                res.send({ msg: 'Producto Actualizado'})
            }
        }

    })
})


// Método DELETE del protocolo HTTP para eliminar
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    
    productoModel.eliminarProducto(id, (error, resultado) => {

        if(error) {
            res.status(500).send({error: 'Error eliminando el producto'})
        }
        else {

            if(resultado.affectedRows === 0) {
                res.status(404).send({ error: 'Producto no encontrado'})
            }
            else {
                res.send({ msg: 'Producto Eliminado'})
            }
        
        }

    })

})

module.exports = router