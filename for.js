/**
 * @param {Number} number - the number of the loop doing
 * @param {Function} functionn - the function of the loop doing (it take i of argument)
 * @param {string} signe - the sign in the loop for(the default is <)
 * @param {Number} incremantation - the incremantion in the loop for (the default is 1)
 * @param {Number} dep - the stzrt state of i (the default is 0)
 * @author leblanmonster#8231
 */
 module.exports = (number, functionn, signe="<", incremantation=1, dep=0) => {
    let signes = ["==", "!=", "<", ">", "<=", ">="]
    if (!functionn) throw "[FORRANGE] function is not defined"
    if (typeof functionn != 'function') throw "[FORRANGE] function must be a function"
    if (typeof number != 'number') throw "[FORRANGE] number must be a number"
    if (typeof signe != 'string') throw "[FORRANGE] signe must be a string"
    if (typeof incremantation != 'number') throw "[FORRANGE] incremetation must be a number"
    if (typeof dep != 'number') throw "[FORRANGE] number must be a number"
    let index = signes.findIndex(t => t == signe)
    switch(index){
    case -1:
        throw "[FORRANGE] sign must be ==, !=, <, >, <=, >="
        break
    case 0:
        for (i = dep; i == number; i = i + incremantation) {
            functionn(i)
        }
        break
    case 2:  
        for (i = dep; i < number; i = i + incremantation) {
            functionn(i)
        }
     break
    case 3:
         for (i = dep; i > number; i = i + incremantation) {
            functionn(i)
        }
        break
      case 4:
      for (i = dep; i <= number; i = i + incremantation) {
            functionn(i)
        }
      break 
      case 5:
        for (i = dep; i >= number; i = i + incremantation) {
            functionn(i)
        }
       break
  }
  }