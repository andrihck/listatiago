let vetor = [10, 20, 30, 20, 40, 50, 20, 60, 70, 20];

let numeroParaVerificar = parseInt(prompt("Digite o número que deseja verificar no vetor:"));

let indices = [];

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeroParaVerificar) {
        indices.push(i);  
    }
}

if (indices.length > 0) {
    console.log(`O número ${numeroParaVerificar} está presente nos seguintes índices: ${indices.join(", ")}`);
} else {
    console.log(`O número ${numeroParaVerificar} não foi encontrado no vetor.`);
}
