

class Recipe{
    constructor(name, id, type, tags, ingredients, pairings, method){
        this.name = name;
        this.id = id;
        this.type = type;
        this.tags = tags,
        this.ingredients = ingredients;
        this.pairings = pairings;
        this.method = method;
    }

    getName(){
        return this.name;
    }

    getID(){
        return this.id;
    }

    getType(){
        return this.type;
    }

    getTags(){
        return this.tags;
    }

    getIngredients(){
        return this.ingredients;
    }

    getPairings(){
        return this.pairings;
    }

    getMethod(){
        return this.method;
    }
}

module.exports = Recipe;