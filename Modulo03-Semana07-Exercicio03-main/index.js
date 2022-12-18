let objDevInHouse = {
    plataforma: "DevInHouse",
    cursos: {
        dados: ["SQL"],
        backend: ["Java", "Spring"],
        frontend: ["Javascript", "React"]
    },
    inovacao_constante: true
};

console.log(objDevInHouse);

let objUser = {
    nome: 'Victor',
    idade: 21,
    cidade: 'São José'
};

console.log(objUser)

objUser['nome'] = 'Victor L. V. Mora';

objUser['idade'] = objUser.idade.toString();

objDevInHouse['objUser'] = objUser;

console.table(objDevInHouse);
console.table(objUser);