// carousel.js

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    constructor(image, title, link){
        this.image = image;
        this.title = title;
        this.link = link;
    }
    
    // Propriedades estáticas para controlar o estado do carrossel
    static _sequence = 0;
    static _size = 0;
    static _interval = null;
    
    // NOVO: Função que reinicia o timer
    static _resetInterval() {
        // Limpa o timer anterior para parar a contagem
        clearInterval(Carousel._interval);
        // Inicia um novo timer de 5 segundos
        Carousel._interval = setInterval(Carousel.Next, 5000);
    }

    // NOVO: Função que apenas desenha o slide na tela
    static _render() {
        const carouselDiv = document.getElementById("carousel");
        const carouselTitleDiv = document.getElementById("carousel-title");

        if (!carouselDiv || !carouselTitleDiv) return; // Segurança

        const currentItem = carouselArr[Carousel._sequence];
        
        carouselDiv.innerHTML = `<a href="${currentItem.link}">
                                     <img src="img/${currentItem.image}" alt="${currentItem.title}">
                                 </a>`;
        
        carouselTitleDiv.innerHTML = `<h2>${currentItem.title}</h2>`;
    }

    static Start(arr){
        if(arr && arr.length > 0){
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._render(); // Mostra o primeiro slide
            Carousel._resetInterval(); // Inicia o timer
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    // ATUALIZADO: Agora o Next() também reinicia o timer
    static Next(){
        Carousel._sequence++;
        // Se a sequência passar do tamanho do array, ela volta para 0
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
        Carousel._render(); // Mostra o slide
        Carousel._resetInterval(); // Reinicia o timer
    }
    
    // NOVO: Função para o botão "Anterior"
    static Prev() {
        Carousel._sequence--;
        // Se a sequência for menor que 0, vai para o último slide
        if(Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel._render(); // Mostra o slide
        Carousel._resetInterval(); // Reinicia o timer
    }
};