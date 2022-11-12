const conteHabilidads = document.getElementById("habilidades");
const conteNombre = document.getElementById("conte-todo");
const conteEstado = document.getElementById("estado");
const contetipo = document.getElementById("tipo");

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
        let id = data.id;
        let nombre = data.species['name'];
        let habilids = data.abilities;
        let imgen = data.sprites.other;
        let estatu = data.stats;
        let tipo = data.types;
        imgenPoke(imgen)
        nombrePoke(nombre,id);
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
const nombrePoke = (nombre,id)=>{
    let nombres = document.getElementById("nombre");
    nombres.innerHTML = `#${id} ${nombre[0].toUpperCase() + nombre.slice(1)}`;
}

// lista de las habilidades del pokemon
const nombresHabilids = (habilids, tipo) =>{
    let habilidad = habilids.map((item) => item.ability.name);
    let tipopoke = tipo.map((item) => item.type.name);
    contetipo.innerHTML =""
    for(i in tipopoke){
        let elmentP = document.createElement("p")
        elmentP.innerHTML = tipopoke[i][0].toUpperCase() + tipopoke[i].slice(1);
        contetipo.appendChild(elmentP)
    }
    conteHabilidads.innerHTML =habilidad;
    
}
//
const BaseEstatus = (estatu)=>{
    let estatus = estatu.map((item) => item.base_stat)
    console.log(estatu)
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

/*-----------------Extraer los primeros 100 pokemon-------------------------- */ 

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


