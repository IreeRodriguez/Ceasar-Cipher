var str = function(){ //funcion para validacion, retorna un String valido para cifrar o descifrar
    var num = /\d/;
    var user = ''; // el String valido se guarda en esta variable durante la funcion.
    do {
        user = prompt('Escribe tu texto aqui.');
        if (user===''){ //valida cadena vacia
            alert('Debes escribir algo, no lo dejes en blanco.');
        }
        else if (num.test(user)) { //hace un test para encontrar caracteres numericos dentro del string
            alert('No puedes usar numeros.');
        }
    } while (user===''|| num.test(user));

    return user;
};


var cipher = function(str){ // funcion para el cifrado
    var output='';
    for (var i=0;i<str.length;i++){ //itera por cada caracter del string.
        var character = str[i];
        var code = str.charCodeAt(i); //lo pasa a codigo ascii
        if (code>=97 && code <=122) { //para letras minusculas
        character = String.fromCharCode(((code-97+33)%26)+97);
    }   else if (code>=65 && code<=90){ //para letras mayusculas
            character = String.fromCharCode(((code-65+33)%26)+65);
        }
        output += character; //nuevo string cifrado
    }

    return output;
};

var decipher = function(str){ // funcion descifrado, funciona igual que la de cifrado pero con la formula inversa
    var output='';
    for (var i=0;i<str.length;i++){
        var character = str[i];
        var code = str.charCodeAt(i);
        if (code>=97 && code <=122) {
        character = String.fromCharCode(((code-97+19)%26)+97);
        } else if (code>=65 && code<=90){
            character = String.fromCharCode(((code-65+19)%26)+65);
        }
        output += character; //nuevo string descrifrado
    }

    return output;
};

function valcipher (){ //funcion incrustada en el boton en html que llama a la funcion para validar y a la de cifrado
    var output = document.getElementById('output');

    output.innerHTML = cipher(str());
}

function valdecipher (){ //funcion incrustada en el boton en html que llama a la funcion para validar y a la de descifrado
    var output = document.getElementById('output');

    output.innerHTML = decipher(str());
}



//Intento anterior para elegir una opcion
// var path = confirm("cifrar o descifar?");
//
// if (path === true) {
//     document.write(cipher(str()));
// } else {
//     document.write(decipher(str()));
// }
