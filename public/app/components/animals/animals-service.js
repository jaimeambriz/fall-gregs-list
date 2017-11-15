function AnimalsService() {
    
        // WHATS PRIVATE?
        // DUMMY DATA
        var animals = [{
            id: 'asdfkljsdafdsaflkj239023u9402u',
            type: 'Dog',
            age: "8 weeks",
            color: 'brown',
            price: 1800,
            description: 'Lab looking for great home.',
            location: 'Boise',
            contact: 'testcar@cars.animals',
            img: '//lorempixel.com/g/200/200/animals/',
            title: 'Your New Pet'
        }]
    
        var id = 0;
        function Animal(config){
            this.title = config.title.value
            this.type = config.type.value
            this.age = config.age.value
            this.price = config.price.value
            this.color = config.color.value
            this.contact = config.contact.value
            this.location = config.location.value
            this.description = config.description.value
            this.img = config.img.value
            this.id = id++
        }
    
        // PUBLIC?
    
        this.getAnimals = function getAnimals(){
            return animals
        }
        
        this.getAnimal = function getAnimal(id){
            for (var i = 0; i < animals.length; i++) {
                var animals = animals[i];
                if(id == animals.id){
                    return animals
                }
            }
        }
    
        this.addAnimal = function addAnimal(form){
            var newAnimal = new Animal(form)
            animals.unshift(newAnimal)
        }
    
    }