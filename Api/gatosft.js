const ftoGatos = async ()=>{
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
    let data = await fetch(url).then((res)=>{
        if(res.status != "200"){
            alert("no se encontro Nada")
        }
        else{
            return res.json();
        }
    })
    if(data){
        let imgGato = data;
        muestraimg(imgGato);
    }
}

const muestraimg= imgen =>{
    const divCont = document.getElementById("conte-img");
    let imgenes = imgen.map((item) => item.url);
        for(let i=0;i<imgenes.length;i++){
            console.log(i)
            let img = document.createElement("img");
            img.src=imgenes[i]
            divCont.appendChild(img)
        }
}