# 📩 Formulário de Contato

Aplicação de formulário de contato desenvolvida com HTML, CSS e JavaScript, incluindo validação de campos e envio de mensagens por meio do EmailJS.
O projeto foi desenvolvido como parte das atividades práticas do curso de Desenvolvimento de Sistemas (DS).

---

## 🚀 Funcionalidades

* ✅ Validação de campos obrigatórios
* ✅ Verificação básica de e-mail
* ✅ Exibição de mensagens de erro em tempo real
* ✅ Botão de envio ativado apenas quando o formulário está válido
* ✅ Envio de mensagem direto para o e-mail usando EmailJS
* ✅ Feedback de sucesso ou erro após envio

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* EmailJS

## 📂 Estrutura do projeto

```
📁 projeto
 ├── atividade.html
 ├── atividadeCSS.css
 └── atividadeJs.js
```

---

## ⚙️ Como executar o projeto

1. Clone este repositório:

```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Abra o arquivo `atividade.html` no navegador

---

## ✉️ Integração com EmailJS

O projeto utiliza o EmailJS para envio de mensagens sem backend.

Para configurar:

1. Crie uma conta no EmailJS
2. Configure um serviço de e-mail
3. Crie um template
4. Substitua no código:

```javascript
emailjs.init("SEU_USER_ID");

emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
    from_name: nome,
    email: email,
    tema: tema,
    message: mensagem
});
```

---

## 👨‍💻 Autor

Desenvolvido por **Willian Pereira**

