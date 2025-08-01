// api/eventos.js

export default function handler(req, res) {
  const eventos = [
    {
      id: 1,
      evento: "ElROW",
      lugar: "Ibiza",
      descripcion: "Una noche llena de energía y mucha musica."
    },
    {
      id: 2,
      evento: "Coachella",
      lugar: "Los Angeles",
      descripcion: "Una semana de after sin parar."
    },
    {
      id: 3,
      evento: "EDC",
      lugar: "Autodromo Hermanos Rodríguez, CDMX",
      descripcion: "5 días de after con el mejor dj set"
    }
  ];

  res.status(200).json(eventos);
}



