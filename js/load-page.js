// Leitura completa do nosso documento HTML
$(document).ready(function(){

// Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML

$('a').click(function(e){
    e.preventDefault() //Anula a funcionalidade do HTML de abrir o link

    //Criar uma variável local(só funciona naquele local)-(global funciona no documento inteiro) que receba o atributo href do link

    let page = $(this).attr('href')

    $('.modal-title').empty()//Limpar o titúlo
    $('.modal-body').empty()//Limpar o Corpo do HTML

    //Verificar qual conteúdo eu devo carregar
    switch(page){
        //Se for para abrir a página Sinópse...
        case 'sinopse': 
            $('.modal-title').append('Sinópse')
            $('.modal-body').append(`<p>
                Criada por Justin Roiland e Dan Harmon, Rick & Morty é uma série animada de comédia que mostra as aventuras interdimensionais de Rick, a mente mais brilhante da galáxia, e seu neto Morty. <br>
            </p>
            <p>
                Com sua arma capaz de criar portais para viajar no tempo-espaço, Rick leva Morty para explorar todos as absurdas formas de vida que o universo é capaz de sustentar. <br>
            </p>
            <p>
                Apesar de genial, Rick tem sofre de alcoolismo e possui uma relação conflituosa com sua família, fruto da sua visão cínica da vida e seu egoísmo. Por outro lado, Morty está longe de ter o intelecto do seu avô, mas é o único capaz de fazê-lo ser um pouquinho mais gentil.<br>
            </p>
            <p>
                Entre momentos hilários e reflexões interessantes sobre a vida, Rick & Morty arranca gargalhadas e ainda rende ótimas discussões filo`)
            $('#modal-info').modal('show')
        break

        //Se for para abrir a página Temporadas...
        case 'temporadas': 
            $('.modal-title').append('Temporadas')
            $('.modal-body').append(`<p>O seriado de Rick and morty contém até o momento 5 temporadas</p>`)
            $('#modal-info').modal('show')
        break

        //Se for para abrir a página Curiosidades...
        case 'curiosidades': 
            $('.modal-title').append('Curiosidades')
            $('.modal-body').append(`<p> 1- O Seriado foi criado, vendido e roteirizado em apenas um dia</p> <br>
            <p>2- Originalmente, Rick e Morty eram paródias de Doc Brown e Marty McFly </p> <br>
            <p>3- A série foi uma das primeiras a estrear um episódio no Instagram </p> <br>
            <p>4- Todos os arrotos de Rick são reais</p>`)
            $('#modal-info').modal('show')
        break

    }

    })

})