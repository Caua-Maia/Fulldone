// form.js


class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, acontato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.acontato = acontato;
    }
}


function Post(form) {

    // Coleta os valores de cada campo do formulário
    const nome = form.elements.namedItem("nome").value;
    const sobrenome = form.elements.namedItem("sobrenome").value;
    const email = form.elements.namedItem("email").value;
    const cpf = form.elements.namedItem("cpf").value;
    const telefone = form.elements.namedItem("telefone").value;
    const contato = form.elements.namedItem("contato").value;
    

    // Cria um novo objeto para salvar os dados do formulário
    const dadosDoFormulario = new Contato(nome, sobrenome, email, cpf, telefone, contato);
    
 
    console.log("Dados do formulário recebidos:");
    console.log(dadosDoFormulario);


    alert('Obrigado, ' + nome + '! Seus dados foram recebidos e registrados no console.');

   
    form.reset();
}

