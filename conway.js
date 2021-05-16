
function Grille(largeur, hauteur) {
      for (ligne = 0; ligne < largeur; ligne++) {
            get = new Array(largeur)
            for (i = 0; i < largeur; i++) {
                  get[i] = new Array(hauteur)
            }
            for (ligne = 0; ligne < largeur; ligne++) {
                  for (colone = 0; colone < hauteur; colone++) {
                        get[ligne][colone] = "░"
                  }
            }
      }
      return get
}
function afficherGrille(grille) {
      console.log(grille.join('\n') + "\n\n")
      return

}
function afficherGrilleDiscord(grille, message, hauteur) {
      tabst ="  " 
      
      for (let i = 0; i < hauteur; i++) {
            tabst = tabst + "\n"+grille[i].join(" ")
      }
      message.channel.send(tabst)
      return

}
function positionCellulesVoisines(grille, ligne, colone) {
      nGL = grille.length
      nGC = grille[0].length
      total = Grille(2, 8)
      droite = false
      bas = false
      gauche = false
      haut = false
      if (ligne - 1 >= 0) { gauche = true }
      if (ligne + 1 <= nGL) { droite = true }
      if (colone - 1 >= 0) { haut = true }
      if (colone + 1 <= nGC) { bas = true }
      if (gauche && haut) {
            total[0] = [ligne - 1, colone - 1]
      }
      else {
            total[0] = [0, 0]
      }
      if (gauche) {
            total[1] = [ligne - 1, colone]
      }
      else {
            total[1] = [0, 0]
      }
      if (gauche && bas) {
            total[2] = [ligne - 1, colone + 1]
      }
      else {
            total[2] = [0, 0]
      }
      if (haut) {
            total[3] = [ligne, colone - 1]
      }
      else {
            total[3] = [0, 0]
      }
      if (bas) {
            total[4] = [ligne, colone + 1]
      }
      else {
            total[4] = [0, 0]
      }
      if (droite && haut) {
            total[5] = [ligne + 1, colone - 1]
      }
      else {
            total[5] = [0, 0]
      }
      if (droite) {
            total[6] = [ligne + 1, colone]
      }
      else {
            total[6] = [0, 0]
      }
      if (droite && bas) {
            total[7] = [ligne + 1, colone + 1]
      }
      else {
            total[7] = [0, 0]
      }
      return total
}
function nombreDesCelluleVoisineVivante(grille, ligne, colone) {
      pDCV = positionCellulesVoisines(grille, ligne, colone)

      total = 0
      for (a = 0; a < pDCV.length; a++) {
            if (grille[pDCV[a][0]][pDCV[a][1]] == "█") {
                  total += 1
            }
      }
      return total
}
function etatSuivant(grille, ligne, colone) {
      nVV = nombreDesCelluleVoisineVivante(grille, ligne, colone)
      etatsuivant = "░"
      if (grille[ligne][colone] == "█") {
            if (nVV < 2) {
                  etatsuivant = "░"
            }
            else if (nVV > 3) {
                  etatsuivant = "░"
            }
            else {
                  etatsuivant = "█"
            }
      }
      if (grille[ligne][colone] == "░") {
            if (nVV == 3) {
                  etatsuivant = "█"
            }
            else {
                  etatsuivant = "░"
            }
      }
      return etatsuivant
}
function conwayLife(grille) {
      nombreDeLigneGrille = grille.length
      nombreDeColoneGrille = grille[0].length
      gc = Grille(nombreDeLigneGrille, nombreDeColoneGrille)
      nombreDeColoneGrille = nombreDeColoneGrille - 1
      nombreDeLigneGrille = nombreDeLigneGrille - 1
      for (ab = 0; ab < nombreDeLigneGrille; ab++) {
            for (c = 0; c < nombreDeColoneGrille; c++) {

                  gc[ab][c] = etatSuivant(grille, ab, c)
            }
      }
      return gc
}
function ConwayLife(grille, nombre, temps) {
      temp = temps * 100
      for (i = 0; i < nombre; i++) {
            ge = conwayLife(grille)
            afficherGrille(ge)
            grille = ge
      }
}
function ConwayLifeDiscord(grille, nombre, temps, message) {
      temp = temps * 100
      for (i = 0; i < nombre; i++) {
            ge = conwayLife(grille)
            afficherGrilleDiscord(ge, message)
            grille = ge
      }
}
const lettre = {
      "A": 1,
      "B": 2,
      "C": 3,
      "D": 4,
      "E": 5,
      "F": 6,
      "G": 7,
      "H": 8,
      "I": 9,
      "J": 10,
      "K": 11,
      "L": 12,
      "M": 13,
      "N": 14,
      "O": 15,
      "P": 16,
      "Q": 17,
      "R": 18,
      "S": 19,
      "T": 20,
      "U": 21,
      "V": 22,
      "W": 23,
      "X": 24,
      "Y": 25,
      "Z": 26
}
module.exports.lettre = lettre
module.exports.afficherGrilleDiscord = (grille, message, hauteur)=>{
    return afficherGrille(grille, message, hauteur)
}
module.exports.Grille = (largeur, hauteur)=>{
    return Grille(largeur, hauteur)
}
module.exports.conwayLife = (grille) => {
    conwayLife(grille)
}