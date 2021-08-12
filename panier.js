/*


Page panier

si en storage j'ai des produits dans panier alors je les affiches et propose un formulaire pour valider la commande
sinon panier vide

appendchild (teddie price, name)    DONE
price += teddie.price
quantité
prix total


if variable = 0 display none    TO DO
else display 
*/

/*DONEES TRANSFEREES 
n'affiche nom que d'un ours à la fois
*/
let dataPanier =  localStorage.getItem("panier");
console.log(dataPanier)
let dataPanier_parse = JSON.parse(dataPanier);

let sum = 0;

let affichage = '<div>';
let indice = 0;
let products = [];
for(let Object of dataPanier_parse){
    let para = document.createElement("p");
    para.className = 'ours';

    products.push(`${Object.IDOurs}`);
    console.log(products);

    para.textContent = `${Object.NomOurs} - Prix ${Object.priceOurs} \u20ac  `;

    let priceOurs_num = parseInt(Object.priceOurs);
    sum+= priceOurs_num;
    console.log(sum)


    /*document.cE h2 name*/

    let image = document.createElement('img');
    image.setAttribute("src",Object.imageOurs)

    let supp = document.createElement('button');
    supp.className = "effOurs"
    supp.textContent = "Supprimer ours"
    supp.setAttribute('data-index', indice);
    supp.addEventListener('click', (event) => {
        /*let i = indice;
        console.log(i);
        console.log(indice);*/

        console.log(event.explicitOriginalTarget.attributes[1].nodeValue);
        dataPanier_parse.splice(event.explicitOriginalTarget.attributes[1].nodeValue, 1)
        console.log(dataPanier_parse);
        localStorage.setItem("panier", JSON.stringify(dataPanier_parse));

        document.location.reload();
    });
indice++;

    para.appendChild(image);
    document.getElementById("container").appendChild(para);
    para.appendChild(supp);
}
let pSum = document.createElement('p');
pSum.textContent = "Total :" + sum + `\u20ac`
document.getElementById("container").appendChild(pSum);
affichage+= '</div>';

console.log(typeof dataPanier_parse);

/*let effacer = container.querySelectorAll('button.effOurs').addEventListener('click', () => {
    console.log('hi');
});*/

/*
fetch('http://localhost:3000/api/teddies/order', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        contact: {
            firstName: document.getElementById(name).value,
            email: "john@example.com"
        }
    })
});
*/
/*
LE POST
let panierData = Local storage.get("panier")
let contact = document.getElementById('submitForm').addEventListener('click', () => {
    console.log(document.getElementById('name').value);
    firstName: document.getElementById(name).value,
});

post
body : json.strgify({contact, products})

*/

/*
BOUTON suppOurs
document.querySelector('#suppOurs').addEventListener('click', () => {splice
*/
/*firstN = document.getElementById('name').value;
let firstName*/

document.getElementById('submitForm').addEventListener('click', (e) => {
    e.preventDefault();

    let contact={
        firstName: document.getElementById('name').value,
        lastName: document.getElementById('lastname').value,
        address: document.getElementById('adress').value,
        city: document.getElementById('city').value,
        email: document.getElementById('mail').value
    }
    /*let contact={
        firstName: "pere",
        lastName: "noel",
        address: "12 rue pale",
        city: "antar",
        email: "yo@gmail.com"
    }*/

    /*contact = JSON.stringify(contact);*/
    console.log(contact);
    console.log(products);
    /*products = JSON.stringify(products);*/

    /*console.log(products);*/
    /*products.push("5beaaa8f1c9d440000a57d95");*/

    fetch('http://localhost:3000/api/teddies/order', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({contact,products}),

    
});
/*const envoi = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({contact, products}),
    mode: 'cors',
    cache: 'default'
};     
fetch("http://localhost:3000/api/teddies/order", envoi)*/
    
});

