// Leitura completa do nosso documento HTML
$(document).ready(function(){

// Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML

$('a').click(function(e){
    e.preventDefault()

    //Criar uma variável local que receba o atributo href do link

    let page = $(this).attr('href')

    $('.modal-title').empty()//Limpar o titúlo
    $('.modal-body').empty()//Limpar o Corpo do HTML

    //Verificar qual conteúdo eu devo carregar
    switch(page){
        //Se for para abrir a página sobre mim...
        case 'about': 
            $('.modal-title').append('Sobre mim')
            $('.modal-body').append(`<p>
            Meu nome é Matheus Antônio, tenho 15 anos e moro na cidade de Lins-SP.
            </p>`)
            $('#modal-info').modal('show')
        break

        //Se for para abrir a página Formação...
        case 'formacao': 
            $('.modal-title').append('Minha Formação')
            $('.modal-body').append(`<p>
            <b>Formação Acadêmica:</b> <br><br>
            Cursando o 2° ano do Ensino Médio em Desenvolvimento de Sistemas.
            </p>`)
            $('#modal-info').modal('show')
        break

        //Se for para abrir a página Trabalhos...
        case 'trabalhos': 
            $('.modal-title').append('Trabalhos')
            $('.modal-body').append(`<p> <b>Experiência profissional</b> <br><br>
            Mecânico de manutenção de máquinas em geral <br>
            Lins Agroindustrial S.A.- Lins-SP <br>
            Mar 2020 – Dez 2020
            </p>`)
            $('#modal-info').modal('show')
        break

        //Se for para abrir a página Contatos...
        case 'contatos': 
            $('.modal-title').append('Contatos')
            $('.modal-body').append(`<p>
            <b>Telefone:</b> <br><br>
            +55 14 99769-2498
            </p>`)
            $('#modal-info').modal('show')
        break

        default: alert('Link não encontrado');
    }

    })

})