var pokemon = [
	{name: "Pikachu", number: 25, type: "Lighting"},
	{name: "Mew", number: 151, type: "Psychic"},
	{name: "Gengar", number: 94, type: "Ghost"},
	{name: "Abra", number: 63, type: "Psychic"}
	];



// Add a Pokemon to the list //

function addPokemon(){
  
  var pokemonName = prompt("Which Pokemon would you like to add?");
  
  var pokemonNumber = prompt("What number is the Pokemon?");
  
  var pokemonType = prompt("What type of Pokemon is it?");
  
  pokemon.push({name:pokemonName,number:pokemonNumber, type: pokemonType});
  
} 

// Delete a Pokemon from list//

function deletePokemon(){
   var pokemonName = prompt("Which Pokemon would you like to delete?");

   for(var i = 0; i < pokemon.length; i++){
       
       if(pokemon[i].name === pokemonName){
         
          delete pokemon[i];
       }
   } 
}



// Sorting Functions// 

function sortPokemonByName(){

pokemon.sort(function(firstPokemon,secondPokemon){  
    if(firstPokemon.name < secondPokemon.name){
      return -1;
    }
    if(firstPokemon.name > secondPokemon.name){
      return 1;
    } else{
      
      return 0;
    }
  
});
  
}


function sortPokemonByNumber(){

pokemon.sort(function(firstPokemon,secondPokemon){  
    if(firstPokemon.number < secondPokemon.number){
      return -1;
    }
    if(firstPokemon.number > secondPokemon.number){
      return 1;
    } else{
      
      return 0;
    }
  
});
  
}

function sortPokemonByType(){

pokemon.sort(function(firstPokemon,secondPokemon){  
    if(firstPokemon.type < secondPokemon.type){
      return -1;
    }
    if(firstPokemon.type > secondPokemon.type){
      return 1;
    } else{
      
      return 0;
    }
  
});
  
}