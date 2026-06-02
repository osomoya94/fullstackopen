import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonaForm from "./components/PersonaForm";
import Persons from "./components/Persons";
import "./index.css";
import Notification from "./components/Notification";
import personService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilterName, setNewFilterName] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState("");

  const handleFilterName = (event) => {
    console.log(event.target.value);
    setNewFilterName(event.target.value);
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();

    const nombreYaExiste = persons.some((person) => person.name === newName);

    if (nombreYaExiste) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        const personaOriginal = persons.find((p) => p.name === newName);

        const personaActualizada = { ...personaOriginal, number: newNumber };

        personService
          .updatePerson(personaOriginal.id, personaActualizada)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personaOriginal.id ? person : returnedPerson,
              ),
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setNotificationMessage(error.message);
            setNotificationType(`Information of ${personaOriginal.name} has already been removed from server`);

            setPersons(persons.filter(p => p.id !== personaOriginal.id));
            
            setTimeout(() => {
              setNotificationMessage(null);
              setNotificationType("");
            }, 5000);
          });
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
      };

      personService.create(nameObject).then((returnedPerson) => {
        setPersons([...persons, returnedPerson]);
        setNewName("");
        setNewNumber("");
        setNotificationMessage(`Add ${nameObject.name}`);
        setNotificationType("exito");

        setTimeout(() => {
          setNotificationMessage(null);
          setNotificationType("");
        }, 5000);
      });
    }
  };

  const searchQuery = newFilterName;
  const personasFiltradas = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const borrarPersona = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id).then(() => {
        const personasActualizadas = persons.filter(
          (person) => person.id !== id,
        );

        setPersons(personasActualizadas);
      });
    }
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>

        <Notification message={notificationMessage} type={notificationType} />

        <Filter
          newFilterName={newFilterName}
          handleFilterName={handleFilterName}
        />

        <PersonaForm
          addName={addName}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />

        <h2>Numbers</h2>
        <Persons
          personasFiltradas={personasFiltradas}
          borrarPersona={borrarPersona}
        />
      </div>
    </>
  );
}

export default App;

// npx json-server --port 3001 --watch db.json
