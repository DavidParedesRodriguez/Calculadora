var assert = require("chai").assert; //heredar todas las funciones que esta corresponde

describe("Pruebas del calculador mediante la interfaz ASSERT del módulo CHAI: ", function () {
  describe("Comprobar typeOf Función: ", function () {
    it("Comprobar el valor devuelto: assert.typeOf('value'): ", function () {
      empleadodew = new Empleado("David");
      result = empleadodew.nombre;
      assert.typeOf(result, "String", "El valor devuelto es de tipo String");
    });
  });

  describe("Comprobar equal Función: ", function () {
    it("Comprobar el valor devuelto: assert.equal('value'): ", function () {
        var direct1 = new Director("Manolo");
        var direct2 = new Director("Manolo");
      assert.equal(direct1.nombre, direct2.nombre);
    });
  });

  describe("Comprobar lengthOf Función: ", function () {
    it("Comprobar el valor devuelto: assert.lengthOf('value'): ", function () {
        var direct5 = new Director("Manolo");
      assert.lengthOf(direct5.nombre,6);
    });
  });

});
class Empleado {
  constructor(nombre) {
    this.departamento = "Informático";
    this.nombre = nombre;
  }
}

class Director extends Empleado {
  constructor(nombre) {
    super(nombre);
    this.informes = [];
  }
}

class Trabajador extends Empleado {
  constructor(nombre) {
    super(nombre);
    this.proyectos = [];
  }
}

class Ingeniero extends Trabajador {
  constructor(nombre) {
    super(nombre);
    this.lenguajeProgramacion = "";
  }
}

//crear los Directores
var director1 = new Director("Pepito");
var director2 = new Director("Manolo");
var director3 = new Director("Hortencia");

//Añadir los informes del director2 'Manolo'
director2.informes.push(
  "------------------------------*********Informe producción enero."
);
director2.informes.push(
  "------------------------------*********Informe producción febrero."
);
director2.informes.push(
  "------------------------------*********Informe producción marzo."
);

//Añadir los informes del director3 'Hortencia'
director3.informes.push(
  "------------------------------*********Informe despido becario."
);

//Creamos los Ingenieros ---------------------------------------
//Ingeniero1 'Juan'
var ingeniero1 = new Ingeniero("Juan");
ingeniero1.LenguajeProgramacion = "JAVA";

//Ingeniero2 'Carmen'
var ingeniero2 = new Ingeniero("Carmen");
ingeniero2.LenguajeProgramacion = "C++";

//Ingeniero3 'Pablo'
var ingeniero3 = new Ingeniero("Pablo");
ingeniero3.LenguajeProgramacion = "JS";

//Ingeniero4 'Emilio'
var ingeniero4 = new Ingeniero("Emilio");
ingeniero4.LenguajeProgramacion = "HTML5";

/*
  document.write(
    "--------------********* NOMBRES DIRECTORES *********-------------"
  );
  
  var directores = [director1, director2, director3];
  
  for (let x = 0; x < directores.length; x++) {
    document.write("<br/>Director --> " + directores[x].nombre);
  
    if (directores[x].informes.length > 0) {
      document.write(
        "<br/>--------------********* INFORMES de:" + directores[x].nombre + " : "
      );
  
      for (let index = 0; index < directores[x].informes.length; index++) {
        document.write("<br/>" + directores[x].informes[index]);
      }
    }
  }
  
  document.write(
    "<br/><br/>--------------********* INGENIEROS *********-------------"
  );
  var ingenieros = [ingeniero1, ingeniero2, ingeniero3, ingeniero4];
  for (let index = 0; index < ingenieros.length; index++) {
    document.write(
      "<br/>------------------------------*********El ingeniero " +
        ingenieros[index].nombre +
        " usa el lenguaje de programación " +
        ingenieros[index].LenguajeProgramacion +
        " en el departamento de Ingeniería"
    );
  }
  */
