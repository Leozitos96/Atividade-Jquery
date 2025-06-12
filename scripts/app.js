$(document).ready(function () {
    
    function mudarConteudo(conteudo){
        $('#conteudo').empty();
        $('#conteudo').append(conteudo);
    }

    $('#1').click(function () {
        const conteudo = `<button id="botaoTexto">Clique aqui</button>
<p id="mensagem">Texto original</p>`;
        mudarConteudo(conteudo);
        $('#botaoTexto').click(function (){
            $('#mensagem').text('Texto alterado com jQuery!');
        })
    });

        $('#2').click(function () {
        const conteudo = `<button id="esconderImg">Esconder imagem</button>
<button id="mostrarImg">Mostrar imagem</button>
<img id="foto" src="img/imagem.png" alt="Exemplo">`;
        mudarConteudo(conteudo);
        $('#mostrarImg').click(function (){
            $('#foto').show();
        })
        $('#esconderImg').click(function (){
            $('#foto').hide();
        })
        
    });

        $('#3').click(function () {
        const conteudo = `<p id="textoHover">Passe o mouse aqui</p>`;
        mudarConteudo(conteudo);
        $('#textoHover').mouseenter(function (){
            $('#textoHover').css('color', 'red');
        })
        $('#textoHover').mouseleave(function () { 
            $('#textoHover').css('color', 'black');
        });

    });

        $('#4').click(function () {
        const conteudo = `<button id="adicionarItem">Adicionar item</button>

<ul id="lista">

  <li>Item 1</li>

  <li>Item 2</li>

</ul>`;
        let numero = 3;
        mudarConteudo(conteudo);
        $('#adicionarItem').click(function (){
            $("#lista").append(`<li>Item ${numero}</li>`);
            numero++;
        })
    });


        $('#5').click(function () {
        const conteudo = `<form id="formulario">

  <input type="text" id="nome" placeholder="Digite seu nome">

  <button type="submit">Enviar</button>

  <p id="erro" style="color: red; display: none;">Por favor, preencha o nome.</p>

</form>`;
        mudarConteudo(conteudo);
        $('#erro').hide();

        $('#formulario').submit(function (event) { 
            const nome = $('#nome').val();
            if(nome){
                $('#erro').hide();
            }else{
                event.preventDefault();
                $('#erro').show();
            }
            
        });
    });

        $('#6').click(function () {
                    const conteudo = `<button id="carregarUsuario">Carregar usuário</button>

<p id="usuarioNome"></p>`;


        mudarConteudo(conteudo);
        $('#carregarUsuario').click(function (){
            $.get("https://jsonplaceholder.typicode.com/users/1", 'name',
                function (data, textStatus, jqXHR) {
                    $('#usuarioNome').text(`${data.text()}`);
                },
                "json"
            );

            
        })




    });



});