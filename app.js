var str = function(){
    var num = /\d/;
    var user = '';
    do {
        user = prompt('Escribe tu texto aqui.');
        if (user===''){
            alert('Debes escribir algo, no lo dejes en blanco.');
        }
        else if (num.test(user)) {
            alert('No puedes usar numeros.');
        }
    } while (user===''|| num.test(user));

    return user;
};


var cipher = function(str){
    var output='';
    for (var i=0;i<str.length;i++){
        var character = str[i];
        var code = str.charCodeAt(i);
        if (code>=97 && code <=122) {
        character = String.fromCharCode(((code-97+33)%26)+97);
        } else if (code>=65 && code<=90){
            character = String.fromCharCode(((code-65+33)%26)+65);
        }
        output += character;
    }

    return output;
};

var decipher = function(str){
    var output='';
    for (var i=0;i<str.length;i++){
        var character = str[i];
        var code = str.charCodeAt(i);
        if (code>=97 && code <=122) {
        character = String.fromCharCode(((code-97+19)%26)+97);
        } else if (code>=65 && code<=90){
            character = String.fromCharCode(((code-65+19)%26)+65);
        }
        output += character;
    }

    return output;
};

function valcipher (){
    var output = document.getElementById('output');

    output.innerHTML = cipher(str());
}

function valdecipher (){
    var output = document.getElementById('output');

    output.innerHTML = decipher(str());
}

// var path = confirm("cifrar o descifar?");
//
// if (path === true) {
//     document.write(cipher(str()));
// } else {
//     document.write(decipher(str()));
// }
