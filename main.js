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
        colonna.className = "col-12 col-md-3"
        pokedex.appendChild(colonna)
        
        let card = document.createElement("div")
        card.className = "card rounded-3 shadow"
        colonna.appendChild(card)

        let body = document.createElement("div")
        body.className = "card-body"
        card.appendChild(body)

        
        let nomePokemon= document.createElement("h5")
        nomePokemon.className = "card-title text-center"
        nomePokemon.appendChild(document.createTextNode(pokemon.name.english))
        body.appendChild(nomePokemon)

        let type = document.createElement("p")
        type.className = "card-text"
        type.appendChild(document.createTextNode("Tipo: " + pokemon.type.join(", ")))
        body.appendChild(type)

        let attack = document.createElement("p")
        attack.className ="text-end"
        attack.appendChild(document.createTextNode(pokemon.base.Attack))
        body.appendChild(attack)

        let defense = document.createElement("p")
        defense.className = "text-end"
        defense.appendChild(document.createTextNode(pokemon.base.Defense))
        body.appendChild(defense)

        
        
        
        

        
        

        
    })
    
 }
