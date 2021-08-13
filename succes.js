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






    document.getElementById("container").appendChild(para);

}
let pSum = document.createElement('p');
pSum.textContent = "Total :" + sum + `\u20ac`
document.getElementById("container").appendChild(pSum);
affichage+= '</div>';