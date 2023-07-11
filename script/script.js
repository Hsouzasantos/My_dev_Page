function toggleMode(){
    //Variavel para referencia do document element
    const html = document.documentElement;

    // Variavel para acessar a classe
    let toggleConte = html.classList.toggle("light")

    // Verifica se a classe está vazia
    if (toggleConte.contains('')){
        // Adiciona o conteudo a classe
        toggleConte.add('light')
    }else{
        // Remove o conteudo da classe
        toggleConte.remove('light')

    }
}