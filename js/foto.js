let foto = document.createDocumentFragment("div");
function createFoto(arr){
    for(let i = 0; i < 50; i++){
        let tempaplate = document.getElementById("tmp").content.cloneNode(true);
        let img = tempaplate.querySelector('img');
        img.setAttribute('src', `https://random.dog/${arr[i]}` );
        foto.appendChild(tempaplate);
    }
    
    document.body.appendChild(foto);

}
function dowload(){
    fetch( "https://random.dog/doggos")
    .then(result => result.json()).then(a => createFoto(a))
}

dowload();

