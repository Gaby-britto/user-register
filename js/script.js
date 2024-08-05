/*Declaração das const*/
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

/*Evento do click do register*/
button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputNameValue = nome.value;
    const inputEmailValue = email.value;
    const inputPhoneValue = phone.value;

    /*Alerts caso algo não seja preenchido*/
    if (inputNameValue === '') {
        alert('Por favor, preencha seu nome.');
        return;
    }else if(inputEmailValue === ''){
        alert('Por favor, preencha seu email.');
        return;
    }else if(inputPhoneValue === ''){
        alert('Por favor, preencha seu telefone.');
        return;
    }

    /*Cria uma const para as div que serão criadas */
    const userDiv = document.createElement('div');

    /*Adicona as divs criadas em user*/
    userDiv.classList.add('user');

    /*Cria o html da div*/
    userDiv.innerHTML = `
        <ul>
        <li><strong>Nome: </strong> ${inputNameValue}</li>
        <li><strong>Email: </strong> ${inputEmailValue}</li>
        <li><strong>Phone: </strong>  ${inputPhoneValue}</li>
        </ul>
        <button class="button-delete">Delete</button>
    `;

    lista.appendChild(userDiv);

    /*Cria a função para deletar a div em que o botão foi cliacado */
    userDiv.querySelector('.button-delete')
    .addEventListener('click', function() {
        userDiv.remove();
    });

    /*Deixa os valores vazios*/
    nome.value = '';
    email.value = '';
    phone.value = '';
});
