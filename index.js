
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const Recipe = require('./src/recipe.js')

const port = process.env.PORT || 5000;


const recipesRelPath = path.join(__dirname, '/lib/recipes.json')
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

let RECIPE_LIST = {} //RECIPE: name, id, type, tags[], ingredients[], suggestedPairings[], method[]
let RECIPE_ARRAY = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/index.html'))
})

app.get('/addrecipe', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/addrecipe.html'))
})

app.get('/recipelist', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/recipelist.html'))
})

app.get('/recipelist/:in', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/recipelistsearch.html'))
})

app.get('/recipe/:in', (req, res) => {
    const query = req.params.in;
    let currentRecipe;
    if(isNaN(query*1)){

    }else{

    }
})




app.get('/api/recipes', (req, res) => {
    
    console.log('sending json data...')
    const recipes = fs.readFileSync(recipesRelPath, 'utf-8', (e) => {
        if(e) return console.error(e);
    })
    const parsedRecipes = JSON.parse(recipes)
    res.json(parsedRecipes);
    console.log('json data sent.')

});

app.post('/api/recipes', (req, res) => {
    const data = req.body;
    console.log('adding recipe...')
    const newRecipe = JSON.parse(data);
    let x = {}
    const recipes = fs.readFileSync(recipesRelPath, 'utf-8', (e) => {
        if(e) return console.error(e);
    })
    x = JSON.parse(recipes)
    x.push(newRecipe);
    fs.writeFileSync(recipesRelPath, JSON.stringify(x), (e) => {if(e) return console.error(e);})
    console.log('recipe added!')
    
    

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))