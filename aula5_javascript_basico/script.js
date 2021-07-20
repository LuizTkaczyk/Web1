/* var nomes = ["Luiz", "Ana", "Maria"];
var notasA = [9.0, 6.6, 5.3];
var notasB = [9.7, 9.9, 1.5];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(media) {

    if (media > 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }

}

for (var index in nomes) {

    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2)

    console.log(nomes[index] + " - " + nota1 + " - " + nota2 + "- media= " + m + "- " + passou(m));
} 


var aluno = {
    nome : "Luiz", 
    nota1: 9.9
}

console.log(aluno["nome"])

*/
/*************************************************** */



/* function criarAluno(nome, n1, n2){
    return{
        nome:nome, n1, n2,
        media: function(){
            return (this.n1 + this.n2) / 2;
        }
    }
} 

function aluno(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1,
        this.nota2 = n2;

    this.media = function () {
        return (this.nota1 + this.nota2) / 2;
    }
}

var turma = [
   criarAluno("Luiz", 9.9,8.7),
   criarAluno("Maria", 9.5,7.7),
   criarAluno("Vitor", 6.8,3.7),
]
var aluno = turma[2];


var a = new aluno("Luiz", 8, 9);
console.log(a.media());
 console.log(aluno.media());

for(var aluno of turma){
    console.log(aluno.nome + "-"+aluno.media())
} */


//criando datas
var d = new Date();

console.log(d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear());