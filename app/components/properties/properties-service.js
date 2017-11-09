function PropertiesService() {
    
        // WHATS PRIVATE?
        // DUMMY DATA
        var properties = [{
            id: 'asdfkljsdafdsaflkj239023u9402u',
            make: 'Honda',
            model: 'Accord',
            year: 1987,
            color: 'Burgandy',
            price: 1800,
            mileage: 323200,
            condition: 'Like New',
            engineId: '3', //GOOD QUESTION
            description: 'Runs great with gas',
            location: 'Boise',
            contact: 'testcar@cars.auto',
            img: '//loremflickr.com/200/200/car',
            title: 'Your New Car'
        }]
    
        var engines = [
            { id: 1, fuel: 'Gas', cylinders: 4 },
            { id: 2, fuel: 'Diesel', cylinders: 4 },
            { id: 3, fuel: 'Gas', cylinders: 6 },
            { id: 4, fuel: 'Gas', cylinders: 8 },
            { id: 5, fuel: 'Gas', cylinders: 10 },
            { id: 6, fuel: 'Diesel', cylinders: 12 },
        ]
        var id = 0;
        function Property(config){
            this.title = config.title.value
            this.make = config.make.value
            this.model = config.model.value
            this.year = config.year.value
            this.price = config.price.value
            this.mileage = config.mileage.value
            this.color = config.color.value
            this.contact = config.contact.value
            this.location = config.location.value
            this.condition = config.condition.value
            this.description = config.description.value
            this.img = config.img.value
            this.id = id++
        }
    
        // PUBLIC?
    
        this.getProperties = function getProperties(){
            return properties
        }
        
        this.getProperty = function getProperty(id){
            debugger
            for (var i = 0; i < properties.length; i++) {
                var property = properties[i];
                if(id == property.id){
                    return property
                }
            }
        }
    
        this.addProperty = function addProperty(form){
            var newproperty= new Property(form)
            properties.unshift(newProperty)
        }
    
    }