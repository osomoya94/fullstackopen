const Persons = ({ personasFiltradas, borrarPersona }) => {
  return (
    <>
      {personasFiltradas.map((person) => (
        <p key={person.id}>
          {person.name} {person.number} 
          <button onClick={() => borrarPersona(person.id, person.name)}>
            delete
          </button>
        </p>
      ))}
    </>
  );
};

export default Persons;