/*
Creare uno slider di immagini: potete usare le immagini che desiderate. Per facilitarvi la vita usate immagini delle stesse dimensioni.
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
Bonus: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. 
*/

const app = new Vue(
    {
        el: '#mainContainer',
        data: {
            citiesImg: [
                "img/londra.jpg",
                "img/milano.jpg",
                "img/parigi.jpg",
                "img/sydney.jpg",
                "img/newyork.jpg" 
            ],
            currentActive: 0,
            isActive: false                                                                        
        },
        methods: {
            switchToNext() {
                if(this.currentActive < this.citiesImg.length - 1) {
                    return this.currentActive++

                } else {
                    this.currentActive = 0;
                }
            },
            switchToPrev() {
                if(this.currentActive > 0) {
                    return this.currentActive--

                } else {
                    this.currentActive = this.citiesImg.length - 1;
                }
            },
            getFullDot() {
                for(let i = 0; i < this.citiesImg.length; i++) {
                    if(i === this.currentActive) {
                        this.isActive = true;
                    }
                }
            },
            pressKeyBoardLeft: function () {
                console.log('ho premuto la freccia sinistra della tastiera');
            }

        }
    }

)

/*
towns: [
    {
        townName: "Londra",
        townImg: "img/londra.jpg"
    },
    {
        townName: "Milano",
        townImg: "img/milano.jpg"
    },
    {
        townName: "Parigi",
        townImg: "img/parigi.jpg"
    },
    {
        townName: "Sydney",
        townImg: "img/sydney.jpg"
    },
    {
        townName: "New York",
        townImg: "img/newyork.jpg"
    }
]
*/