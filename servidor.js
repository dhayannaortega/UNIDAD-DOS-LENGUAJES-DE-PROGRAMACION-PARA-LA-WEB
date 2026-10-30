const express = require('express');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Public')));

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Totogilma16.', 
    database: 'coquito_amarillo'
});

conexion.connect((err) => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
    } else {
        console.log('Conectado exitosamente a la base de datos MySQL.');
    }
});

class RegistroPedido {
    constructor(nombreCliente, producto, cantidad, correo) {
        this.nombreCliente = nombreCliente;
        this.producto = producto;
        this.cantidad = cantidad;
        this.correo = correo;
        this.fecha = new Date().toISOString();
    }

    toCSV() {
        return `"${this.fecha}","${this.nombreCliente}","${this.producto}",${this.cantidad},"${this.correo}"\n`;
    }
}

app.post('/registrar', (req, res) => {
    const { nombreCliente, producto, cantidad, correo } = req.body;

    if (!nombreCliente || !producto || !cantidad || cantidad <= 0) {
        return res.status(400).json({ error: "Datos incompletos o inválidos" });
    }

    const registro = new RegistroPedido(nombreCliente, producto, cantidad, correo);

    fs.appendFile("Datos.csv", registro.toCSV(), (err) => {
        if (err) console.error("Error al escribir en CSV:", err);
    });

    const sql = "INSERT INTO registros (nombre_cliente, producto, cantidad, correo) VALUES (?, ?, ?, ?)";
    conexion.query(sql, [nombreCliente, producto, cantidad, correo], (err, resultado) => {
        if (err) {
            console.error("Error al insertar en MySQL:", err);
            return res.status(500).send(`<h1>Error en la Base de Datos</h1><p>${err.message}</p><a href='/formulario.html'>Volver al formulario</a>`);
        }
        
        res.send("<h1>¡Pedido registrado con éxito en Coquito Amarillo S.A.S. (CSV y MySQL)!</h1><a href='/formulario.html'>Volver al formulario</a>");
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});