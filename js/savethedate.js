(function () {
    const dataDom = document.querySelector('.hero-content h1 span').innerText
    console.log(dataDom)

    //Formmatar data do navegador
    
    function converterData(string){
        //separando data e hora com destructuring
        const [data, horas] = string.split(' ')
        const [dias,mes,ano] = data.split('/')
        const [hora,minuto] = horas.split('H')
        return new Date(ano, mes - 1, dias, hora, minuto) 

    }

    const dataEvento = converterData(dataDom)
    console.log(dataEvento)

    //pegando data atual

    const dataAtual = new Date()

    //fazendo diferença entre as datas

    const diferença = Math.abs(dataAtual.getTime() - dataEvento.getTime())
    console.log(diferença)

    const dias = Math.ceil(diferença / (1000 * 60 * 60 * 24))
    console.log(dias)
    const diferençaAnos = Math.round(dias/365)
    console.log(diferençaAnos)
})()