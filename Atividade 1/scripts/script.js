const botoesComprar = document.querySelectorAll('.btn-comprar');
const alertaCarrinho = document.querySelector('#alerta-carrinho');
const fecharAlerta = document.querySelector('#fechar-alerta');
const contadorCarrinho = document.querySelector('#contador-carrinho');

let quantidadeCarrinho = 0;

botoesComprar.forEach(function (botao) {
    botao.addEventListener('click', function () {
        quantidadeCarrinho++;
        contadorCarrinho.textContent = quantidadeCarrinho;
        alertaCarrinho.classList.remove('oculto');

        botao.classList.add('comprado');
        setTimeout(function () {
            botao.classList.remove('comprado');
        }, 800);
    });
});

fecharAlerta.addEventListener('click', function () {
    alertaCarrinho.classList.add('oculto');
});


/* Campo de busca  */
const formBusca = document.querySelector('#form-busca');
const campoBusca = document.querySelector('#busca');
const produtos = document.querySelectorAll('.produto');
const semResultado = document.querySelector('#sem-resultado');

formBusca.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const termo = campoBusca.value.trim().toLowerCase();
    let encontrados = 0;

    produtos.forEach(function (produto) {
        const nome = produto.querySelector('h3').textContent.toLowerCase();
        const corresponde = nome.includes(termo);

        produto.classList.toggle('oculto', !corresponde);

        if (corresponde) {
            encontrados++;
        }
    });
    semResultado.classList.toggle('oculto', encontrados > 0);
});


/* Formulario   */
const formContato = document.querySelector('#form-contato');
const camposObrigatorios = formContato.querySelectorAll('[required]');
const sucessoContato = document.querySelector('#sucesso-contato');

// retorna true se o campo estiver preenchido
function validarCampo(campo) {
    const vazio = campo.value.trim() === '';
    const mensagemErro = campo.parentElement.querySelector('.erro');

    campo.classList.toggle('invalido', vazio);
    mensagemErro.classList.toggle('oculto', !vazio);

    return !vazio;
}

formContato.addEventListener('submit', function (evento) {
    evento.preventDefault(); // sem back-end: nunca envia de verdade

    let formularioValido = true;

    camposObrigatorios.forEach(function (campo) {
        if (!validarCampo(campo)) {
            formularioValido = false;
        }
    });

    sucessoContato.classList.toggle('oculto', !formularioValido);

    if (formularioValido) {
        formContato.reset();
    }
});

// quando o usuário corrige um campo com erro
camposObrigatorios.forEach(function (campo) {
    campo.addEventListener('input', function () {
        if (campo.classList.contains('invalido')) {
            validarCampo(campo);
        }
    });
});
