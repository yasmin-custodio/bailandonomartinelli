// Variáveis globais para controle do carrinho/modal
let setorSelecionado = '';
let precoUnitario = 0;

// Função para abrir o modal de compra com os dados do setor escolhido
function selecionarIngresso(setor, preco) {
    setorSelecionado = setor;
    precoUnitario = preco;

    document.getElementById('modal-titulo').innerText = `Ingresso: ${setor}`;
    document.getElementById('modal-descricao').innerText = `Garanta sua vaga no setor ${setor} no topo do Martinelli.`;
    document.getElementById('qtd').value = 1;
    
    atualizarTotal();
    
    const modal = document.getElementById('modal-compra');
    modal.style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal-compra');
    modal.style.display = 'none';
}

// Atualiza o valor total no modal ao mudar a quantidade
function atualizarTotal() {
    const quantidade = parseInt(document.getElementById('qtd').value) || 1;
    const total = precoUnitario * quantidade;
    
    document.getElementById('valor-total').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Processa o envio do formulário de compra
function confirmarCompra(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const quantidade = document.getElementById('qtd').value;
    const total = precoUnitario * quantidade;

    alert(`🎉 INGRESSO RESERVADO COM SUCESSO!\n\nNome: ${nome}\nE-mail: ${email}\nSetor: ${setorSelecionado}\nQuantidade: ${quantidade}\nTotal: R$ ${total.toFixed(2).replace('.', ',')}\n\nObrigado por garantir sua vaga no Bailando no Martinelli!`);

    // Limpa o formulário e fecha o modal
    document.getElementById('form-compra').reset();
    fecharModal();
}

// Fecha o modal caso o usuário clique fora da caixa de conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('modal-compra');
    if (event.target === modal) {
        fecharModal();
    }
};