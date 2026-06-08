const express = require("express");
const morgan = require('morgan');
const cors = require('cors');


const app = express();
app.use(express.static('dist'));
app.use(cors());
app.use(express.json());

morgan.token('postData', (request, response) => {
  if (request.method === "POST") {
    return JSON.stringify(request.body);
  }
  return " "; 
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'));



let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const cantidad = persons.length;
  const data = new Date();

  response.send(
    `<p> Phonebook has info for ${cantidad} people</p> <br/> <p> ${data} </p>`,
  );
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const persona = persons.find((persona) => persona.id === id);

  if (persona) {
    response.json(persona);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((persona) => persona.id !== id);

  response.status(204).end();
});

const generateId = () => {
  const maxId = Math.floor(Math.random() * 1000000) ;
  return maxId;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const buscarNombre = persons.find((persona) => persona.name === body.name);

  if (buscarNombre) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const personaNueva = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(personaNueva);

  response.json(personaNueva);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
