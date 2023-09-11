function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    let preco = quantidade.value * valorUnitario;

    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidade.value);
    alert(preco);
}

function limpar() {

}