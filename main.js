let pokemon

fetch("pokemon.json-master/pokedex.json")
  .then(response => response.json())
  .then(data => {
    pokemon = data.slice(0, 151);
    console.log(pokemon);
    generaCards(pokemon);
  })
  .catch(err => {});

function generaCards(lista){
     let pokedex = document.getElementById("pokedex")
    
    lista.forEach(pokemon=>{
        let colonna = document.createElement("div")
        colonna.className = "col-12 col-md-3 p-3"
        pokedex.appendChild(colonna)
        
        let card = document.createElement("div")
        card.setAttribute("style", "width: 18rem")
        card.className = "card rounded-3 shadow"
        colonna.appendChild(card)

        let img = document.createElement("img")
        img.src =`pokemon.json-master/images/${formatIdImg(pokemon.id)}.png`
        card.appendChild(img)
        
        let body = document.createElement("div")
        body.className = "card-body"
        card.appendChild(body)

        
        let nomePokemon= document.createElement("h5")
        nomePokemon.className = "card-title text-center py-3"
        nomePokemon.appendChild(document.createTextNode(pokemon.name.english))
        body.appendChild(nomePokemon)

        let type = document.createElement("p")
        type.className = "card-text"
        type.appendChild(document.createTextNode("Tipo: " + pokemon.type.join(", ")))
        body.appendChild(type)

        let attack = document.createElement("p")
        attack.className ="text-end"
        attack.appendChild(document.createTextNode("Attacco: " + pokemon.base.Attack))
        body.appendChild(attack)

        let defense = document.createElement("p")
        defense.className = "text-end"
        defense.appendChild(document.createTextNode("Difesa: " + pokemon.base.Defense))
        body.appendChild(defense)

    })
    
 }
      function formatIdImg(id) {
        if(id.toString().length == 1) return `00${id}`
        if(id.toString().length == 2) return `0${id}`
        return id


      } 
        

        
        
        

        
        

        
