function PropertiesService() {
    var baseUrl = 'http://localhost:3000/api/properties'
    // WHATS PRIVATE?
    // DUMMY DATA
    var properties = []


    function Property(config) {
        this.title = config.title.value
        this.size = config.size.value
        this.rooms = config.rooms.value
        this.year = config.year.value
        this.price = config.price.value
        this.baths = config.baths.value
        this.contact = config.contact.value
        this.location = config.location.value
        this.description = config.description.value
        this.img = config.img.value

    }

    function logError(err) {
        console.error(err)
    }

    // PUBLIC?

    this.getProperties = function getProperties(cb) {
        if (!cb || typeof cb != 'function') { return console.error('WOah I need a cb to run') }
        $.get(baseUrl)
            .then(res => {
                properties = res
                cb(properties)
            })
            .catch(logError)
    }

    this.getProperty = function getProperty(id) {
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            if (id == property.id) {
                return property
            }
        }
    }

    this.addProperty = function addProperty(form, getProperties) {
        debugger
        
        var newProperty = new Property(form)
        $.post(baseUrl, newProperty)
            .then(getProperties)
            .catch(logError)
    }

    this.removeProperty = function removeProperty(index, getProperties) {
        $.ajax({
            url: baseUrl + '/' + index,
            method: 'DELETE'
        })
            .then(getProperties)
            .catch(logError)
    }

}