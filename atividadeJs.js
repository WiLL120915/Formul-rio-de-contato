function mostrarErro(campo, mensagem) {
    campo.classList.add("erro");
    campo.nextElementSibling.textContent = mensagem;
}

function limparErro(campo) {
    campo.classList.remove("erro");
    campo.nextElementSibling.textContent = "";
}
function verificarFormulario() {
    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const temaValor = tema.value;
    const mensagemValor = mensagem.value.trim()


    if (nomeValor && emailValor.includes("@") && temaValor && mensagemValor) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const tema = document.getElementById("tema")
const mensagem = document.getElementById("mensagem")
const sucesso = document.getElementById("sucesso");
const falha = document.getElementById("falha");
const botao = document.getElementById("enviar");
const form = document.getElementById("contato");


nome.addEventListener("input", verificarFormulario);
email.addEventListener("input", verificarFormulario);
mensagem.addEventListener("input", verificarFormulario);
tema.addEventListener("change", verificarFormulario);


form.addEventListener("submit", function (event) {
    event.preventDefault();


    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const temaValor = tema.value;
    const mensagemValor = mensagem.value.trim();
    let formularioValido = true;

    sucesso.textContent = "";
    falha.textContent = "";
   


    if (!nomeValor) {
        mostrarErro(nome, "*");
        formularioValido = false;
    } else {
        limparErro(nome);
    }

    if (!emailValor.includes("@")) {
        mostrarErro(email, "*");
        formularioValido = false;
    } else {
        limparErro(email);
    }

    if (!temaValor) {
        mostrarErro(tema, "*");
        formularioValido = false;
    } else {
        limparErro(tema);
    }

    if (!mensagemValor) {
        mostrarErro(mensagem, "*");
        formularioValido = false;
    } else {
        limparErro(mensagem)
    }

  if (formularioValido) {
    emailjs.send("service_noqey67", "template_s8yo68m", {
        from_name: nomeValor,
        email: emailValor,
        tema: temaValor,
        message: mensagemValor
    })
    .then(() => {
        sucesso.textContent = "Formulário enviado com sucesso!";

        setTimeout(() => {
            sucesso.textContent = "";
        }, 3000);

        form.reset();

        limparErro(nome);
        limparErro(email);
        limparErro(tema);
        limparErro(mensagem);

        botao.disabled = true;
    })
    .catch((error) => {
        falha.textContent = "Erro ao enviar mensagem!";
        console.log(error);

        setTimeout(() => {
            falha.textContent = "";
        }, 3000);
    });
}

});