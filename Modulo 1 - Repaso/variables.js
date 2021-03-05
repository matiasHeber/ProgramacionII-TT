// 1) Declara las variables subject y year. La primera debe ser de tipo string y la segunda
// de tipo numérica. Estas variables deberán poder sobreescribirse ó pisarse si el
// programador lo desea a futuro... ¿te acordás qué tipo de variable permite esto?

let subject = 'Programación';
let year = 2021;


// 2) Declara la variable favoriteSites, la cual deberá guardar una colección de tus sitios
// web favoritos. Sí esta variable se definiera dentro de un bloque de código de una
// función, no deberíamos poder utilizarla por fuera de este ¿Que tipo de variable
// permite este comportamiento?

// a) Imprime en consola el valor que está en la posición 3 de favoriteSites.
// b) A la variable favoriteSites, que guarda la colección de sitios favoritos,
// deberás remover el último elemento. ¿Que método que vimos sirve?
// c) Luego de remover el último ítem de favoriteSites, debes agregar otro ítem
// al final de la colección.

let favoriteSites = ['Instagram', 'Facebook', 'Twitter'];

console.log('Valor 3 de la posicion de favoriteSites: ' + favoriteSites[2]);

favoriteSites.pop();

favoriteSites.push('Twitch');

// 3) Declara la variable person la cual deberá tener las siguientes propiedades/métodos:
// - name
// - lastName

// - age
// Deberás poner los tipos de dato que creas que corresponda en cada una.
// Una vez que lo hayas hechos imprimí en consola el texto: “Hola mi nombre
// es Mike Wazowski y tengo 37 años” donde el nombre, apellido y edad deben
// provenir de la variable declarada.
// Por otro lado, la variable person no debe permitir modificar datos de su
// interior ¿qué tipo de variable corresponde para esto?

const person = {
    name: 'Harrison',
    lastName: 'Ford',
    age: 63
};

console.log('Hola mi nombre es ' + person.name + ' ' + person.lastName + ' y tengo ' + person.age + ' años');

// 4) Sin modificar el código del punto 3, agrega una propiedad sites que tenga como
// valor la variable favoriteSites.
// a) Imprimí en consola la propiedad sites de person.
// b) Imprimí en la consola el segundo sitio favorito de la persona.

person.sites = favoriteSites;

// 5) Procesando cursos
// a) Generar un array con 6 elementos
// i) Cada elemento debe ser un objeto literal con las propiedades
// (1) Nombre del curso
// (2) Descripción del curso
// (3) Cantidad de alumnos
// (4) Array de días de la semana que se cursa

let cursos = [
    {
        nombre: 'Marketing',
        descripcion: 'Curso de marketing digital',
        alumnos: 6,
        cursa: ['lunes', 'miercoles', 'viernes']
    },
    {
        nombre: 'Fullstack',
        descripcion: 'Curso de fullstack web developer',
        alumnos: 10,
        cursa: ['martes', 'jueves', 'sabado']
    },
    {
        nombre: 'Big data',
        descripcion: 'Curso de big data',
        alumnos: 8,
        cursa: ['lunes', 'viernes']
    },
    {
        nombre: 'Diseño UI',
        descripcion: 'Curso de diseño UI',
        alumnos: 5,
        cursa: ['martes', 'jueves']
    },
    {
        nombre: 'Programación I',
        descripcion: 'Curso de programación uno',
        alumnos: 16,
        cursa: ['lunes', 'jueves']
    },
    {
        nombre: 'Programación II',
        descripcion: 'Curso de programacion dos',
        alumnos: 24,
        cursa: ['miercoles,', 'viernes']
    },
]


// b) ¿Se te ocurre cómo obtener el tercer curso?

console.log('Tercer curso: ' + cursos[2]);

// c) ¿Se te ocurre cómo obtener el nombre del cuarto curso?

console.log('Nombre del cuarto curso: ' + cursos[3].nombre);

// d) ¿Se te ocurre cómo agregarle un día de cursada al curso número 2?

cursos[1].cursa.push('lunes');

// e) Agregale a cada curso un array de alumnos

cursos[0].nombreAlumnos = ['Mateo Sanchez', 'Josefina Lopez'];
cursos[1].nombreAlumnos = ['Lucas Perez','Bautista Vidal'];
cursos[2].nombreAlumnos = ['Matias Heber','Patricio Diez'];
cursos[3].nombreAlumnos = ['Ignacio Marconi','Carlos Tevez'];
cursos[4].nombreAlumnos = ['Lionel Messi','Pablo Perez'];
cursos[5].nombreAlumnos = ['Me quede','Sin Ideas'];
cursos[6].nombreAlumnos = ['Nombre 1','Nombre 2'];

// f) ¿Cómo puedo obtener el nombre del primer alumno del curso 3?

console.log(cursos[2].nombreAlumnos[0]);