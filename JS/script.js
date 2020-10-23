// IPO Input -> Process -> Output

// Constants and State Variables (Data)

// Constant Data
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1050'

// State Data 
let pokemonData;

// Cached Element References 
const $collection = $('#collection')


// Attached Event Listeners
$collection.on('click', 'article.card', handleClick)

// Functions
init()

function init(){
    getData()
}
function getData(){
    // Fetch data using ajax
    $.ajax(BASE_URL).then(function(data){
        // Take returned data and assign it to a global var
        pokemonData=data
        // Call rener to visualize it to the DOM
        render()
    }, function(error){
        console.log("Error:", error)
    })
}

function handleClick(){
    alert()
}

function render(){
    // map over the objects inside of the pokemonData results array
    // dynamically generate html for wach element in the array
    // add that html to our collection element
    const htmlArray=pokemonData.results.map(pokemon =>{
        return `
        <article class="card flex-ctr">
            <h3>${pokemon.name}</h3>
        </article>
        `;
    })
    $collection.html(htmlArray)
}