let space = '  ';
let column = '';
for(let row = 1; row <= 10; row++){
    column = space;
    for(let i = row; i <= 10; i++){
        column = column + i + ',';
    }
    console.log(column);
    space = space + '  ';
}