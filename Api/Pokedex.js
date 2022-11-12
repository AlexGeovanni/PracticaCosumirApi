const conteHabilidads = document.getElementById("habilidades");
const conteNombre = document.getElementById("conte-todo");
const conteEstado = document.getElementById("estado");


const fetchPokemon = async () =>{
    const PokeNameInput = document.getElementById("pokename")
    let pokeName = PokeNameInput.value;
    pokeName = pokeName.toLowerCase();    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    // esta funcion para consultar api y then es una promesa que tendra un respuesta
    let data = await fetch(url).then((res)=>{
        if(res.status != "200"){
            alert("no se encontro el pokemon")
        }
        else{
            return res.json();
        }
    })
    if(data){
        console.log(data)
        let nombre = data.species['name'];
        let habilids = data.abilities;
        let imgen = data.sprites.other;
        let estatu = data.stats;
        let tipo = data.types[0].type;
        imgenPoke(imgen)
        nombrePoke(nombre);
        nombresHabilids(habilids,tipo);
        BaseEstatus(estatu)
    }
}


//Agregamos imagenes del pokemon
const imgenPoke = imgen=>{
    let imgepoke = document.getElementById("Imgpoke");
    imgepoke.src = imgen["official-artwork"].front_default;
}


//Asignamos el nombre del pokemon
const nombrePoke = nombre=>{
    let nombres = document.getElementById("nombre");
    nombres.innerHTML = nombre;
}

// lista de las habilidades del pokemon
const nombresHabilids = (habilids, tipo) =>{
    let habilidad = habilids.map((item) => item.ability.name);
    conteHabilidads.innerHTML="";  
    let tipopoke = tipo.name;
    conteHabilidads.innerHTML=`<h2>Tipo</h2> <p>${tipopoke}</>
    <h2>Habilidades</h2>  `  
    for(i in habilidad){
        let elmentP = document.createElement("p");
        let conteo = i;
        let contenido = `${Number(conteo)+1}: ${habilidad[i]}`
        elmentP.innerHTML = contenido
        conteHabilidads.appendChild(elmentP)
    }
}
//
const BaseEstatus = (estatu)=>{
    let estatus = estatu.map((item) => item.base_stat)
    let nombreEstatus = estatu.map((item) => item.stat.name)
    conteEstado.innerHTML=""    
    conteEstado.innerHTML='<h2>Estados</h2>'
    for(i in estatus){
        let elmentP = document.createElement("p")        
        conteEstado.appendChild(elmentP)
        for(j in nombreEstatus){
            let contenido = `<h2 style="font-size:1.1rem; display:inline;">${nombreEstatus[i]}:</h2> ${estatus[i]}`
            elmentP.innerHTML = contenido;
        }
    }
}

/*----------------- Extraer los primeros 100 pokemon-------------------------- */ 

const nombresTodos = async () =>{
    const url2 = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`
    let data = await fetch(url2).then((res)=>{
        if(res.status != "200"){
            alert("no se encontro el pokemon")
        }
        else{
            return res.json();
        }
    })
    if(data){
        let todosNom = data.results;
        imprimeNombres(todosNom);
    }
}

const imprimeNombres = nombres =>{
    nombre = nombres.map((item) =>item.name);
    conteNombre.innerHTML=""
    for( i in nombre){
        let elmentP = document.createElement("p");
        let conteo = i;
        elmentP.textContent = `${Number(conteo)+1} : ${nombre[i]}`;
        conteNombre.appendChild(elmentP);
    }
}


