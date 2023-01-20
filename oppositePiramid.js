let space = '          ';
let row = '';
for(let i = 10; i >= 1; i--){
    row = space;
    for(let j = i; j <= 10; j++){
        row = row + j + ',';
    }
    console.log(row);
    space = space.substring(0, (i - 1) );
}