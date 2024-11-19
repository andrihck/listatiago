let filmesFavoritos = ["O Senhor dos Anéis", "Inception", "Matrix"];

filmesFavoritos[0] = "Star Wars";

if (filmesFavoritos[filmesFavoritos.length - 1] !== "Harry Potter") {
    filmesFavoritos.push("Harry Potter");
}

console.log("Filmes favoritos de Pedro:", filmesFavoritos);
