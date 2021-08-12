let url = "http://localhost:3000/api/teddies"
var counter = 0
fetch(url)
.then(response =>response.json())
.then(data => {
    console.log(data);
    let affichage = '<div>';
    /*console.log(data[0].name);*/
    for(let Object of data){
        let para = document.createElement("p");
        let lien = document.createElement("a");
        lien.setAttribute("href","produit.html?id=" + Object._id);
        lien.textContent = "Détails";
        para.className = 'ours';


        para.textContent = `${Object.name} - Prix ${Object.price} \u20ac  `;


        /*document.cE h2 name*/
        para.appendChild(lien);
        let image = document.createElement('img');
        image.setAttribute("src",Object.imageUrl)

        para.appendChild(image);
        document.getElementById("container").appendChild(para);
    }
    affichage+= '</div>';


    /*for(let Object of data){
        let divImg = document.createElement('img');
        divImg.src = `${Object.imageUrl}`;
        document.getElementById("image").appendChild(divImg);
    }*/
}
        );

/*document.querySelector('#redirection').addEventListener('click', () => {
    window.location.href = 'page1.html';
});*/

