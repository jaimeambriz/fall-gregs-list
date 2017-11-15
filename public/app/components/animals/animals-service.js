function AnimalsService() {
    var baseUrl = 'http://localhost:3000/api/animals'
    // WHATS PRIVATE?
    // DUMMY DATA
    var animals = []

    function Animal(config) {
        this.title = config.title.value
        this.species = config.species.value
        this.breed = config.breed.value
        this.age = config.age.value
        this.price = config.price.value
        this.color = config.color.value
        this.contact = config.contact.value
        this.location = config.location.value
        this.description = config.description.value
        this.img = config.img.value
    }
    function logError(err) {
        console.error(err)
    }
    // PUBLIC?

    this.getAnimals = function getAnimals(cb) {
        if (!cb || typeof cb != 'function') { return console.error('WOah I need a cb to run') }
        // first task is to request the data from the server ASYNC
        // the data from the server
        // give the controller what it wants
        $.get(baseUrl)
            .then(res => {
                // second task is to update the local autos array with 
                animals = res
                cb(animals)
            })
            .fail(logError)
    }


    this.getAnimal = function getAnimal(id) {
        for (var i = 0; i < animals.length; i++) {
            var animals = animals[i];
            if (id == animals.id) {
                return animals
            }
        }
    }

    this.addAnimal = function addAnimal(form, getAnimals) {
        if (!form || !getAnimals || typeof getAnimals != 'function') { return console.error('Unable to add Animal', 'bad parameters', form, getAnimals) }
        var newAnimal = new Animal(form)
        $.post(baseUrl, newAnimal)
            .then(getAnimals)
            .fail(logError)
    }

    this.removeAnimal = function removeAnimal(id, getAnimals) {
        $.ajax({
            url: baseUrl + '/' + id,
            method: 'DELETE'
        })
            .then(getAnimals)
            .fail(logError)
    }


}

