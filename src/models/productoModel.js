const db = require('../db')

// Obtener los productos
const obtenerProductos = (callback) => {
    const sql = 'SELECT * FROM productos'

    db.query(sql, callback)
}

// Crear producto
const crearProducto = (producto, callback) => {
    const sql = 'INSERT INTO productos(nombre, precio) VALUES (?, ?)'

    db.query(
        sql,
        [producto.nombre, producto.precio],
        callback
    )
}

// Actualizar Producto 
const  actualizarProducto = (id, producto, callback)  => {
    const sql = 'UPDATE productos SET nombre = ?, precio = ? WHERE id = ?'

    db.query(
        sql, 
        [producto.nombre, producto.precio, id], 
        callback
    )
}

// Eliminar Producto
const eliminarProducto = (id, callback) => {
    const sql = 'DELETE FROM productos WHERE id = ?'

    db.query(
        sql, 
        [id], 
        callback
    )
}


module.exports = {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}