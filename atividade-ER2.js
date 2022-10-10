let alunosPresentes = 15

for (let aluno = 0; aluno <= alunosPresentes; aluno++){
    
    if (aluno == 0){
        console.log('zero ' + aluno)
    }else if (aluno % 2 == 0){
        console.log('par ' + aluno)
    }else {
        console.log('impar ' + aluno)
    }
}