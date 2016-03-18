$(document).ready(function () {
    console.log("It's working");
});

$(document).on("keydown", function () {

});
$(document).on("touchmove", function (e) {
    var currentY = e.originalEvent.touches ?
        e.originalEvent.touches[0].pageY : e.pageY;
    if (currentY > lastY) {
        console.log('moving down');
    } else {
        console.log('moving up');
    }
});

function Case(posX, posY, color, n) {
    this.x = posX;
    this.y = posY;
    this.color = color || "white";
    this.valeur = n || null;
}

function Grille() {
    this.taille = 4;
    this.grille = new Array();

    for (var i = 0; i < this.taille; i++) {
        this.grille[i] = new Array();
    }
    for (var i = 0; i < this.taille; i++) {
        for (var j = 0; j < taille; j++) {
            console.log("i -> " + i);
            console.log("j -> " + j);
            this.grille[i][j] = new Case(j, i);
        }
    }

    this.recup_colonne = function (j) {
        var tab = new Array();
        for (var i = 0; i < this.taille; i++) {
            tab[i] = 0;
        }
        var k = 0;
        for (var i = 0; i < this.taille; i++) {
            if (grille[i][j].valeur > 0) {
                tab[k] = grille[i][j].valeur;
                k++;
            }
        }
        return tab;
    }
    this.recup_colonne = function (i) {
        var tab = new Array();
        for (var i = 0; i < this.taille; i++) {
            tab[i] = 0;
        }
        var k = 0;
        for (var j = 0; j < this.taille; j++) {
            if (grille[i][j].valeur > 0) {
                tab[k] = grille[i][j].valeur;
                k++;
            }
        }
        return tab;
    }
}


grille = new Grille();
