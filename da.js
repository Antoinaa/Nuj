
let x=5;  //variabila
x=7;
 
console.log(x); //un fel de cout

const pi=3.14;  //const trb obligatoriu sa aiba o valoare

x="neata";  //poate fii si char si int si float

console.log(x);
console.log(typeof x);

x=7;
x=x+1;

x="abc";
let y="def";
let z=x+y;

const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(x>y);
console.log(x<=y);
console.log(x==y);

let f=5;
console.log(x+f);
console.log("5"===5); //verif daca sunt egale si also daca sunt e acelasi tip
console.log("5"==5);



let numar=97;
if (numar==67)  //if(numar %2 ==0) like paritatea
{
    console.log("a");
}
else console.log("ce vrei");

let ab=true;
if(a)
    console.log("true");


let zi="marti";
switch (zi){
    case "luni":console.log("este luni"); break;  //fara break ar fi afisat cazul cu marti indiferent
    case "marti":console.log("mart"); break;
    default: console.log("nu.i niciuna");
}





let i=0;
while(i<5){
    i++;
console.log(i, "da");}

do
{

    i++;
console.log(i, "da");
}while(i<5);


for(let j=0;j<5;j++)
    console.log(j);



const string="na";
const string1="ayaye";

const k=5;
console.log (string+' '+string1+k);


const salut ="buna";
const ziuaa= "ziua";
console.log (salut + ziuaa + " ");
console.log(`bun venit, ${salut} ${ziuaa}!`); //pune spaceuri automat decat sa pui tu



const arr=[1,4,6,6,7,'gfd']; 
console.log(arr);

const array=[4,68,5,8];
let max=array[0];
// for(let i=0;i<array.length;i++)
//     if(array[i]>max)
//         max=array[i];

// console.log(max);

for (let numar of array)
{
    console.log(numar);
}

array.push(99,67);
console.log(array);
array.pop();
console.log(array);

function suma(a,b){
    let c=a+b;
    return c;
}

let rezultat = suma (5,8);
console.log(rezultat);
console.log(suma(10,1));
 

let user ="eu";
function verifuser(nume)
{
    if(nume==="eu"){
    console.log("autentif");
    return true;}
    else return false;

}

const sumaArrow = (a,b) => a+b;
console.log (sumaArrow(1,2));

async function autentifutiliz(){
    return 5;
}

console.log (autentifutiliz());

async function trimiteDate()
{
    letuser = await autentifutiliz();
    console.log (`Bun venit, ${user}!`);
}

trimiteDate ();
console.log ('Calculeaza ceva');


let student = {
    nume:"petrica",
    prenume:"nuj",
    varsta:67,

    invatare: function ()
    {
        console.log("invat acum");
    },
};

console.log(`buna eu sunt ${student.nume} ${student.varsta} !`);
student.invatare();