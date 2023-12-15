//VARIABLE

var name ="mike"


//PRIMITIVOS
//  INMUTABLE: CAPACIDAD DE CAMBIAR EL VALOR INTERNO DE UNA VARIABLE SIN REASIGNARLA


//string
var UserName = "Mike"
var UserName = "wasoski"

var message = UserName + "" + UserName;
var message = `mi nombre es ${UserName} ${UserName}`;

//METODOS
message = message.replace("mike", "Albert");
console.log(message);

//PROPIEDADES
message.length
console.log(message.length); //ESTA SUMANDO LOS CARACTERES DE LOS DOLARES HAY 26 CARACTERES 

//NUMBER
var numberAmigos = 267 ;
console.log(typeof message); // TYPE OFF PARA QUE ME DIGA QUE TIPO ES NUMERO, NOMBRE

//BOOLEAN

var isJavaScriptTheTrueHappiness = true;
console.log(! isJavaScriptTheTrueHappiness );  // SI LE PONGO LA EXCLAMACION DA EL CONTRARIO





const mike={
    nombre:"mike" ,
    apellidos:"Wasoski" ,
    amigos: 230, 
    aficiones: {
        "cazar gamusinos de noche",
        "hacer musica"
    },

    isunPocoLoco: true

}

console.log(mike.aficiones) //SI LE DOY UN PUNTO ESPECIFICO QUE QUIERO DENTRO DE LAS VARIABLES QUEN HAY