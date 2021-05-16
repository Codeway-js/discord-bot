module.exports.run = (bot, message)=>{
    message.channel.send(`la grille est comme ça:
     A       B       C      D      E      F      G      H      I     J
1    **A1**    **B1**    **C1**     **D1**    **E1**    **F1**    **G1**    **H1**    **I1**    **J1**
2   **A2**    **B2**   **C2**    **D2**    **E2**    **F2**   **G2**    **H2**  **I2**    **J2**
3   **A3**    **B3**   **C3**    **D3**    **E3**    **F3**   **G3**    **H3**   **I3**    **J3**
4   **A4**    **B4**   **C4**   **D4**    **E4**   **F4**    **G4**   **H4**   **I4**   **J4**
5   **A5**    **B5**   **C5**    **D5**    **E5**    **F5**    **G5**   **H5**    **I5**   **J5**
6   **A6**    **B6**   **C6**    **D6**    **E6**    **F6**    **G6**  **H6**    **I6**   **J6**
7   **A7**    **B7**   **C7**    **D7**    **E7**    **F7**    **G7**    **H7**    **I7**   **J7**
8   **A8**    **B8**   **C8**    **D8**   **E8**   **F8**    **G8**     **H8**   **I8**   **J8**
9   **A9**    **B9**   **C9**    **D9**   **E9**   **F9**    **G9**     **H9**   **I9**   **J9**
10  **A10** **B10**  **C10** **D10** **E10**   **F10** **G10**  **H10** **I10** **J10**
    `)
    message.channel.send("Faite `.conwaylife` et indiquer le nombre de répetition puis les cases ex :`.conwaylife 10 C4 C5 C6`(C'est une figure qui s'appelle le clignotant) ")
}
module.exports.help = {
    name:"tabconway",
    type: "fun",
    ex: "vous montre le tableau pour le jeu de la vie **pour en savoir plus sur le jeu de la vie tapez la commande `helpconwaylife`**",
    syn:".tabconway"
}