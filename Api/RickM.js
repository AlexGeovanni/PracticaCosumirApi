const rickNombres = async ()=>{
    const idPersonaje = document.getElementById("idPersonaje");
    let id = idPersonaje.value;
    id = Number(id);
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    let data = await fetch(url).then((res)=>{
        if(res.status != "200")  
        {
            alert('No encontramos nada');
        }
        else {
            return res.json();
        }
    })
    if(data){
        console.log(data);
        let imgen = data.image;        
        let nombre = data.name;
        agregaimg(imgen,nombre);
    }

}

const agregaimg = (imgen,nombrePer) =>{
    const conteimg = document.getElementById("Imgen");
    const conteNombre = document.getElementById("nombre")
    conteimg.src = imgen;
    conteNombre.innerHTML = nombrePer;
}


/*------ Consultamos todos los nombres ------------------------------- */
const nombresTodos = async ()=>{
    const url2 = `https://rickandmortyapi.com/api/character`

    const data = await fetch(url2).then((res)=>{
        if(res.status !='200'){
            alert('no hay nada')
        }else{
            return res.json()
        }
    })
    if(data){
        console.log(data)
        let datos = data.results
        imprimeTodo(datos);
    }
}

const imprimeTodo = nombres =>{
    const conteNombres = document.getElementById("conte-todo")
    let nombre = nombres.map((item) => item.name);
    for(i in nombre){
        let conteo = i;
        console.log(conteo);
        let elmentP = document.createElement("p");
        elmentP.textContent=`${Number(conteo)+1}: ${nombre[i]}`
        conteNombres.appendChild(elmentP);
    }
}
nombresTodos()