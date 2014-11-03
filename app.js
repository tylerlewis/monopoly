(function createBoard() {
  for(var i = 0; i < 4; i++) {
    var corner = document.createElement('div');
    corner.className = 'corner' + (i + 1);
    document.getElementsByClassName('gameboard')[0].appendChild(corner);
    for(var j = 0; j < 9; j++) {
      var space = document.createElement('div');
      space.className = 'section' + (i + 1);
      document.getElementsByClassName('gameboard')[0].appendChild(space);
    }
  }
})();