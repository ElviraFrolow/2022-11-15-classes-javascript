console.log("test");
const output = document.getElementById("result");

document.getElementById("submit").onclick = function (event) {
  event.preventDefault();
  const artistName = document.getElementById("artistName").value;
  const age = document.getElementById("age").value;
  const soldSingles = document.getElementById("soldSingles").value;
  let card = document.createElement("img");
  card.setAttribute("src", "img/rapper.jpg");
  card.setAttribute("width", "50");
  card.setAttribute("height", "100");
  card.setAttribute("alt", "Rapper Card");
  document.body.appendChild(card);
  class Rapper {
    constructor(artistName, age, soldSingles) {
      this.artistName = artistName;
      this.age = age;
      this.soldSingles = soldSingles;
      this.cardGenerator = function () {
        output.innerHTML += `<p>${artistName}, ${age}, ${soldSingles}</p>`;
      };
    }
  }
  let rapper1 = new Rapper(artistName, age, soldSingles);
  rapper1.cardGenerator();
};

//   let surface1 = new Surface(15, 10);
//   // console.log(surface1);
//   // Ergebnis: Surface {hoehe: 10, breite: 10}
//   // console.log(typeof Surface); // function
//   // console.log(surface1.calcSurface()); // 100

// // ==========BLAUPAUSEN/TEMPLATES FÜR OBJEKTE=========

// // 1. Möglichkeit: Object constructor function
// // Namen müssen wir hier groß schreiben (Konvention)
// function Laptop(pommes, model, jahr, ram) {
//     // This bezieht sich auf das Objekt, was durch die Funktion erstellt wird
//     // Wir weisen Werte zu und nutzen deswegen ein =
//     this.kaffee = pommes;
//     // key: hersteller, value ist der Wert, der durch den Parameter kommt
//     this.model = model;
//     this.jahr = jahr;
//     this.ram = ram;
//     this.showObject = function () {
//       console.log(this);
//     };
//     this.description = function () {
//       console.log(
//         `Wir haben hier ein Laptop von ${this.kaffee} und das Model ist ${this.model} aus dem Jahr ${this.jahr} mit ${this.ram} Ram`
//       );
//     };
//   }

//   let laptop3 = new Laptop("Huawai", "Matebook 14", 2019, "16GB");
//   // laptop3.showObject();
//   // laptop3.description();

//   // console.log(typeof Laptop); //function

//   // 2. Möglichkeit: Class mit constructor
//   // Wir verwenden das class Keyword
//   // Name wird auch wieder groß geschrieben
//   class Surface {
//     // Wir brauchen immer eine constructor Methode, ansonsten erstellt JS automatisch eine leere für uns
//     constructor(height, width) {
//       this.hoehe = height;
//       this.breite = width;
//     }
//     calcSurface() {
//       return this.hoehe * this.breite;
//     }
//   }

//   let surface1 = new Surface(15, 10);
//   // console.log(surface1);
//   // Ergebnis: Surface {hoehe: 10, breite: 10}
//   // console.log(typeof Surface); // function
//   // console.log(surface1.calcSurface()); // 100

//   let personen = [];
//   // Name + Wohnort
//   class SuperCodePeopleZzz {
//     constructor(firstName, wohnort) {
//       this.firstName = firstName;
//       this.wohnort = wohnort;
//     }
//   }

//   // let jess = new SuperCodePeopleZzz("Jess", "Berlin");
//   // console.log(jess);
//   personen.push(new SuperCodePeopleZzz("Jess", "Berlin"));
//   personen.push(new SuperCodePeopleZzz("Tayfun", "Westerburg"));
//   personen.push(new SuperCodePeopleZzz("Nils", "Münster"));
//   // console.log(personen);

//   // Unterschied: Wir können Klassen einfach erweitern
//   // ==========CLASS EXTENDEN==========
//   class CubicSurface extends Surface {
//     constructor(height, width, depth) {
//       // Wir müssen uns um die Werte die wir in der eigentlichen Klasse verwenden keine Gedanken machen, sondern reichen die mit super() an die ursprüngliche Klasse durch
//       super(height, width);
//       this.tiefe = depth;
//     }
//     calcCubic() {
//       return this.calcSurface() * this.tiefe;
//     }
//   }

//   let cubic1 = new CubicSurface(10, 10, 5);

//   // Theoretisch können wir die Werte aus einem bereits erstellten Objekt auch an die Klasse durchreichen
//   // let cubic1 = new CubicSurface(surface1.hoehe, surface1.breite, 10);
//   console.log(cubic1); // CubicSurface {hoehe: 10, breite: 10, tiefe: 10}
//   console.log(cubic1.calcCubic());

//   // class SuperCodePeopleZzz {
//   //     constructor(firstName, wohnort) {
//   //       this.firstName = firstName;
//   //       this.wohnort = wohnort;
//   //     }
//   //   }

//   class WorkingSuperCodePeopleZzz extends SuperCodePeopleZzz {
//     constructor(firstName, wohnort, job) {
//       super(firstName, wohnort);
//       this.job = job;
//     }
//   }

//   personen.push(
//     new WorkingSuperCodePeopleZzz("Marzio", "München", "Motivationstrainer")
//   );

//   console.log(personen);
