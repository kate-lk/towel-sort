
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if (matrix === undefined || matrix.length === 0){
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      newArr = newArr + ',' + matrix[i].reverse();
     
    } else {
      newArr = newArr + ',' + matrix[i];
       
    } 
  }
  let oneStr = newArr.split(',');
  let newN = oneStr.map(Number);
  newN.splice(0, 1);
  return newN;
}
