$(document).ready(function(){

    $('a').addClass('text-white')

    $('.btn-light').click(function(light){
        light.preventDefault()

        // Remover o CSS existente do nosso tema... (Jumbotron)
        // Seleciona o Jumbotron e excluo o CSS existente
        $('.jumbotron').removeClass('bg-matheus-martins')
        $('.jumbotron').removeClass('bg-dark')
        // Aplicar a classe CSS que eu desejo

        $('.jumbotron').addClass('bg-light')
        $('a').removeClass('text-white')
        $('a').addClass('text-dark')

    })

    $('.btn-dark').click(function(dark){
        dark.preventDefault()

        // Remover o CSS existente do nosso tema... (Jumbotron)
        // Seleciona o Jumbotron e excluo o CSS existente
        $('.jumbotron').removeClass('bg-matheus-martins')
        $('.jumbotron').removeClass('bg-light')
        // Aplicar a classe CSS que eu desejo

        $('.jumbotron').addClass('bg-dark')
        $('a').removeClass('text-dark')
        $('a').addClass('text-white')

    })

    $('.btn-primary').click(function(primary){
        primary.preventDefault()

        // Remover o CSS existente do nosso tema... (Jumbotron)
        // Seleciona o Jumbotron e excluo o CSS existente
        $('.jumbotron').removeClass('bg-dark')
        $('.jumbotron').removeClass('bg-light')
        // Aplicar a classe CSS que eu desejo

        $('.jumbotron').addClass('bg-matheus-martins')
        $('a').removeClass('text-dark')
        $('a').addClass('text-white')

    })
})