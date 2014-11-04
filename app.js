// (function createBoard() {
//   for(var i = 0; i < 4; i++) {
//     var corner = document.createElement('div');
//     corner.className = 'corner' + (i + 1);
//     document.getElementsByClassName('gameboard')[0].appendChild(corner);
//     for(var j = 0; j < 9; j++) {
//       var space = document.createElement('div');
//       space.className = 'section' + (i + 1) + ' space' + (j + 1);
//       document.getElementsByClassName('gameboard')[0].appendChild(space);
//     }
//   }
// })();

(function createBoard() {
  for(var i = 0; i < 11; i++) {
    var row = document.createElement('tr');
    var rowClass = 'row' + (i + 1);
    row.className = rowClass;
    document.getElementsByClassName('gameboard')[0].appendChild(row);
    for(var j = 0; j < 11; j++) {
      var td = document.createElement('td');
      var space = document.createElement('div');

      if(i === 0 && j === 0) { var spaceClass = 'upperLeft'; }
      else if(i === 0 && j === 10) { var spaceClass = 'upperRight'; }
      else if(i === 10 && j === 0) { var spaceClass = 'lowerLeft'; }
      else if(i === 10 && j === 10) { var spaceClass = 'lowerRight'; }
      else if(i === 0) { var spaceClass = 'top'; }
      else if(i === 10) { var spaceClass = 'bottom'; }
      else if(j === 0) { var spaceClass = 'left'; }
      else if(j === 10) { var spaceClass = 'right'; }
      else { var spaceClass = 'nah'; }

      space.className = spaceClass;
      td.appendChild(space);
      document.getElementsByClassName(rowClass)[0].appendChild(td);
    }
  }
})();