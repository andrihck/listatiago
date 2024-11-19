let listaCompras = [];

for (let i = 0; i < 3; i++) {
    let item = prompt("Digite o item para adicionar à lista de compras:");
    listaCompras.push(item);
}

if (listaCompras[listaCompras.length - 1] !== "leite") {
    listaCompras.push("leite"); 
}

console.log("Lista de compras:", listaCompras);


