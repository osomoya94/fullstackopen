const Part=({part})=>{

    return<p>{part.name} {part.exercises}</p>
};

export default Part;


// const usuarios = ["Ana", "Pedro", "Juan", "Alberto", "Lucía"];
// const searchQuery = "al"; // Lo que el usuario escribió

// const resultados = usuarios.filter(nombre => 
//     nombre.toLowerCase().includes(searchQuery.toLowerCase())
// );