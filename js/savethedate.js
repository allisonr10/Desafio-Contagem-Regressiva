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
    
    //pegando data atual

    const dataAtual = new Date()
    console.log(dataAtual)
    console.log(dataEvento)
    //fazendo diferença entre as datas

    let restante = dataEvento.getTime() - dataAtual.getTime()

    const umMinuto = 60 * 1000
    const umaHora = 60 * umMinuto
    const umDia = 24 * umaHora

    const diasFaltam = parseInt(restante/umDia)
    restante = restante - diasFaltam * umDia

    const horasFaltam = parseInt(restante/umaHora)
    restante = restante - horasFaltam * umaHora

    const minutosFaltam = parseInt(restante/umMinuto)
    restante = restante - minutosFaltam * umMinuto

    const segundosRestam = parseInt(restante/1000)
    restante = restante - segundosRestam * 1000

    console.log( diasFaltam, horasFaltam, minutosFaltam, segundosRestam)

    //função para adicionar os valores direto na página

function adicionarValores(d,h,m,s){
        const p = document.createElement('p')
        p.textContent = `Contagem regressiva: Faltam ${d} dias, ${h} horas, ${m} minutos, ${s} segundos,`
        document.querySelector('.hero-content').appendChild(p)
    }
    adicionarValores(diasFaltam, horasFaltam, minutosFaltam, segundosRestam)

})()