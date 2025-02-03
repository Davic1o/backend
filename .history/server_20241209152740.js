
    const restaurantes = [
      {
        id: "1",
        nombre: "Restaurante El Buen Sabor",
        tipo: "Tradicional",
        horario: "12:00 - 22:00",
        url: "https://media.istockphoto.com/id/1368784260/es/foto/p%C3%A9rgola-y-terraza-con-mesas-restaurante-jard%C3%ADn-con-un-fondo-de-estanque.jpg?s=612x612&w=0&k=20&c=wahAKev5qiRW1bUuRkCdHNPCQdKZs6pAw3yXt_AlD-s="
      },
      {
        id: "2",
        nombre: "Café del Valle",
        tipo: "Tradicional",
        horario: "12:00 - 22:00",
        url: "https://media.istockphoto.com/id/1368784260/es/foto/p%C3%A9rgola-y-terraza-con-mesas-restaurante-jard%C3%ADn-con-un-fondo-de-estanque.jpg?s=612x612&w=0&k=20&c=wahAKev5qiRW1bUuRkCdHNPCQdKZs6pAw3yXt_AlD-s="
      },
      {
        id: "3",
        nombre: "La Parrilla de San José",
        tipo: "Tradicional",
        horario: "12:00 - 22:00",
        url: "https://media.istockphoto.com/id/1368784260/es/foto/p%C3%A9rgola-y-terraza-con-mesas-restaurante-jard%C3%ADn-con-un-fondo-de-estanque.jpg?s=612x612&w=0&k=20&c=wahAKev5qiRW1bUuRkCdHNPCQdKZs6pAw3yXt_AlD-s="
      },
      {
        id: "4",
        nombre: "Carlos David Vega",
        tipo: "jarron",
        horario: "fsjklf"
      },
      {
        id: "5",
        nombre: "JANITO ALIMANIA",
        tipo: "negro",
        horario: "g"
      }
    ]
  





const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {  
    res.status(200).json({
        message: "Hello World"
    })
})

app.get('/restaurantes', (req, res) => {  
    res.status(200).json(restaurantes)
})

app.get('/restaurante/:id', (req, res) => {
    res.status(200).json(
        restaurantes.find(restaurante => restaurante.id === req.params.id)
    )
})


app.post('/restaurantes', (req, res) => {

    restaurantes.push(req.body);
    res.status(200).json({
        message: "Restaurante creado"
    }
    )
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})