function carregarProdutos() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakestoreapi.com/products", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    var produtos = JSON.parse(xhr.responseText);
                    mostrarProdutos(produtos);
                } catch (erro) {
                    console.error("Erro ao processar JSON", erro);
                }
            } else {
                console.error("Erro na requisição:", xhr.status);
            }
        }
    };

    xhr.send();
}

function mostrarProdutos(produtos) {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    produtos.forEach(produto => {
        var li = document.createElement("li");
        li.textContent = produto.title;
        lista.appendChild(li);
    });
}
