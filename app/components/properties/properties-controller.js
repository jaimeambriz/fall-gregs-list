function PropertiesController() {
    var propertiesService = new PropertiesService()
  
    // Buttons
    // Add New Auto
    // Delete Auto
    // Report Flag
    // View More
    // Filter / Search
    var propertiesElem = document.getElementById('properties-list')
    var propertiesFormElem = document.getElementById('add-property-form')
    var showButton = document.getElementById('show-button')
    function drawProperties() {
      // WHERE ARE ALL THE Properties?
      var properties = propertiesService.getProperties()
      var template = ''
      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        template += `
              <div class="col-md-3">
                  <div class="panel panel-info">
                      <div class="panel-heading">
                          <h3>${property.title}</h3>
                          <h6>${property.location}</h6>
                      </div>
                      <div class="panel-body text-center">
                          <img src="${property.img}" class="img-responsive">
                          <h4>${property.year} - ${property.make} ${property.model}</h4>
                      </div>
                      <div class="panel-footer">
                          <h5>$ ${property.price}</h5>
                      </div>
                  </div>
              </div>
              `
      }
      propertiesElem.innerHTML = template
    }
  
    this.addProperty = function addProperty(event) {
      event.preventDefault()
      var form = event.target
      propertiesService.addProperty(form)
      propertiesFormElem.classList.toggle('hidden', true)
      drawProperties()
    }
    var formstate = false
    
    this.showAddPropertyForm = function showAddPropertyForm() {
      if (formstate) {
        showButton.innerText = 'Add Listing'
        showButton.className = 'btn btn-info'
        PropertiesFormElem.classList.add('hidden')
        formstate = false
      } else {
        showButton.innerText = 'Cancel'
        showButton.className = 'btn btn-danger'
        PropertiesFormElem.classList.remove('hidden')
        formstate = true
      }
    }
  
    drawProperties()
  }