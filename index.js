const express = require("express")

const app = express()

let estudiantes = [{ "nombre": "est1", "apellido": "apellido", "id": "111" }]

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/estudiantes", (req, res) => {
    res.send(estudiantes)
})

app.post("/estudiantes", (req, res) => {

    estudiantes.push({
        "nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "id": req.body.id
    })

    res.send(estudiantes)
})

app.get('/estudiantes/:id', (req, res) => {
    let estudiante = estudiantes.find(e => e.id === req.params.id)
    if (estudiante) {
        res.send(estudiante)
    } else {
        res.send("ingrese id valido")
    }
})

app.put("/estudiantes/:id", (req, res) => {

    let estudiante = estudiantes.find(e => e.id === req.params.id)

    if (estudiante) {
        estudiante.nombre = req.body.nombre
        estudiante.apellido = req.body.apellido

        res.send(estudiantes)
    } else {
        res.send("ingrese id valido")
    }
})

app.delete("/estudiantes/:id", (req, res) => {

    let estudiante = estudiantes.find(e => e.id === req.params.id)

    if (estudiante) {
        let index = estudiantes.indexOf(estudiante)
        estudiantes.splice(index, 1)
        res.send(estudiantes)
    } else {
        res.send("ingrese id valido")
    }
})

app.listen(3000, () => {
    console.log("ejecutandose en puerto 3000");
})