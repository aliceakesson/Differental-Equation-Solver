var input = document.querySelector('#equationInput input');


document.addEventListener('keydown', function(event){
    if(event.key == "Enter") {
        var text = input.value
        solveEquation(text)
    }
} );

function solveEquation(text) {
    console.log(text);
}