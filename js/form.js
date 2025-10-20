// form.js

// 1. A classe 'contato' agora tem um construtor para receber e armazenar os dados.
class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.Contato = contato;
    }
}

// 2. A função 'Post' vai criar o objeto e exibi-lo no console.
function Post(form) {
    // Coleta os valores de cada campo do formulário
    const nome = form.elements.namedItem("nome").value;
    const sobrenome = form.elements.namedItem("sobrenome").value;
    const email = form.elements.namedItem("email").value;
    const cpf = form.elements.namedItem("cpf").value;
    const telefone = form.elements.namedItem("telefone").value;
    const contato = form.elements.namedItem("contato").value;

    // Cria uma nova instância da classe Contato com os dados coletados
    const dadosDoFormulario = new contato(nome, sobrenome, email, cpf, telefone, contato);
    
    // O requisito principal: Exibe o objeto criado no console do navegador
    console.log("Dados do formulário recebidos:");
    console.log(dadosDoFormulario);

    // Bônus: Um feedback visual para o usuário
    alert('Obrigado, ' + nome + '! Seus dados foram recebidos e registrados no console.');

    // Bônus: Limpa o formulário após o envio
    form.reset();
}

// A função Enviar() não era utilizada, então foi removida para manter o código limpo.