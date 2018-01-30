var x = 1;

while (x < 21) {
    if ((x % 3 === 0) && (x % 5 === 0)) {// check divisibility
        console.log('JuliaJames');// print Julia, James, or JuliaJames
    } else if (x % 3 === 0) {
        console.log('Julia');
    } else if (x % 5 === 0) {
        console.log('James');
    } else {
        console.log(x);
    }
    x++; // increment x
}
