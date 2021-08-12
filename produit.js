let params = (new URL(document.location)).searchParams;
let id = params.get('id'); // is the string "Jonathan Smith".
console.log(id);

let url = `http://localhost:3000/api/teddies/${id}`;

fetch(url)
.then(response =>response.json())
.then(data =>{
    console.log(data);
    let teddie = data;
    
    let div1 = document.createElement('p');
    div1.className ='feuille'
    var text = document.createTextNode(`${teddie.name} - Prix ${teddie.price} \u20ac`);
    div1.appendChild(text);
    document.body.appendChild(div1);

    console.log(`${teddie.colors[0]}`);

    let para = document.createElement("p");
    

    var couleurOurs = document.createTextNode(`${teddie.colors[0]}`);
    document.body.appendChild(couleurOurs);
    document.getElementById("couleur1").appendChild(couleurOurs);

    var couleurOurs2 = document.createTextNode(`${teddie.colors[1]}`);
    document.body.appendChild(couleurOurs2);
    document.getElementById("couleur2").appendChild(couleurOurs2);
    /*if no color couleurOurs2 = ''*/

    var couleurOurs3 = document.createTextNode(`${teddie.colors[2]}`);
    document.body.appendChild(couleurOurs3);
    document.getElementById("couleur3").appendChild(couleurOurs3);



    let lien = document.createElement("a");
    lien.setAttribute("href","produit.html?id=" + Object._id);
    lien.textContent = "";
    div1.appendChild(lien);
    let image = document.createElement('img');
    image.setAttribute("src",teddie.imageUrl)

    div1.appendChild(image);
    document.getElementById("fiche").appendChild(para);

    /*let contenuePanier*/
    let totalPanier = 0;
    let prixOurs = parseInt(`${teddie.price}`);
    document.querySelector('#ajouPanier').addEventListener('click', () => {

        let panier;
        let achat;

        if ((localStorage.getItem("panier") == null) || (localStorage.getItem("panier") == undefined)) {
            achat = [];
            achat.push({NomOurs : `${teddie.name}`,
            IDOurs : `${teddie._id}`,
            priceOurs : `${teddie.price}`,
            imageOurs : `${teddie.imageUrl}`
        });
            console.log(achat);
        } else {
            let panier_sto = localStorage.getItem("panier");
            achat = JSON.parse(panier_sto);
            achat.push({NomOurs : `${teddie.name}`,
            IDOurs : `${teddie._id}`,
            priceOurs : `${teddie.price}`,
            imageOurs : `${teddie.imageUrl}`
            
            })
            console.log(achat);
        }
        console.log(achat);
        let achat_json = JSON.stringify(achat);
        console.log(achat_json)
        localStorage.setItem("panier", achat_json);
        console.log(localStorage.getItem("panier"))
    });

/*
si qqc ddans tableau, parse, ajouter, stringify
*/





    /*div1.textContent = `${tedd
        ie.name} - Couleur(s) ${teddie.colors}`;
    document.getElementById("fiche").appendChild(div1);*/

    /*  si client clique achete -> ajouter 'prix' au panier
        sur page panier si client clique 'retirer' -> soustraire prix
        créer réponse quand envoyer
    */ 
});