const slide = ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp"];
const legende = ["Lac du Vallon", "Clocher d'Yvoire", "Pointe d'Yvoire", "Lac Léman depuis le mont Bénan", "Port de Thonon et quartier de Rives",
    "Cygne dans le port d'Évian", "Vue depuis le belvédaire de Tréchauffé", "Thonon et le lac Léman", "Esplanade du théâtre de Thonon"];
let numero = 0;

function ChangeSlide(sens) {

    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;

    document.getElementById("slide").src = "slide/" + slide[numero];
    document.getElementById("legende").innerHTML = legende[numero];


};

setInterval("ChangeSlide(1)", 4000);
