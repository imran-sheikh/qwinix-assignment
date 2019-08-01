
module.exports = function generatePins() {
  let result = [];
    for(let i =1; i < 9; i++) {
      for (let j=3; j < 9; j++) {
        for(let k=2; k < 9; k++) {
          for(let l=4; l<9; l++) {
            if ( j !== i+1 && k !== j+1 && l !== k+1 && result.length < 1000)
            result.push( i*1000 + j*100 + k*10 + l*1);
          }
        }
      }
    }
    return Object.assign({}, result);
}
