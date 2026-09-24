// Função para trocar de tela/aba
function mostrarAba(idAba, event) {
    if (event) {
        event.preventDefault();
    }

    // Esconde todas as abas
    const abas = document.querySelectorAll('.aba-conteudo');
    abas.forEach(aba => {
        aba.classList.remove('active');
    });

    // Mostra apenas a aba clicada
    const abaSelecionada = document.getElementById(idAba);
    if (abaSelecionada) {
        abaSelecionada.classList.add('active');
    }

    // Atualiza a cor de destaque do menu superior
    const linksNav = document.querySelectorAll('.nav-link');
    linksNav.forEach(link => {
        link.classList.remove('active');
    });

    // Rola para o topo da tela suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Variáveis do Modal de Compra
let precoUnitario = 0;
let ingressoNome = "";

function selecionarIngresso(nome, preco) {
    ingressoNome = nome;
    precoUnitario = preco;

    document.getElementById('modal-titulo').innerText = `Ingresso: ${nome}`;
    document.getElementById('modal-descricao').innerText = `Valor unitário: R$ ${preco},00`;
    document.getElementById('qtd').value = 1;
    
    atualizarTotal();
    document.getElementById('modal-compra').style.display = 'flex';
}

function atualizarTotal() {
    const qtd = parseInt(document.getElementById('qtd').value) || 1;
    const total = precoUnitario * qtd;
    document.getElementById('valor-total').innerText = `R$ ${total},00`;
}

function fecharModal() {
    document.getElementById('modal-compra').style.display = 'none';
}

function confirmarCompra(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const qtd = document.getElementById('qtd').value;
    const total = precoUnitario * qtd;

    alert(`🎉 Parabéns, ${nome}!\n\nSua compra de ${qtd}x (${ingressoNome}) no valor total de R$ ${total},00 foi realizada com sucesso!\n\nEnviamos a confirmação para o seu e-mail.`);
    
    fecharModal();
    document.getElementById('form-compra').reset();
}

// Fechar modal ao clicar fora da caixa
window.onclick = function(e) {
    const modal = document.getElementById('modal-compra');
    if (e.target === modal) {
        fecharModal();
    }
}
