class FileUploader{

  constructor(){
      this.nFiles = 0;
      this.fileArray;
      this.totalBytes = 0;


  }
  


initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(-5.798072327687263,43.37706124441714),
    zoom: 2,
    mapTypeId: 'terrain'
  });
  var file  = document.querySelector('input').files[0];
  var kmlLayer = new google.maps.KmlLayer(file, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
  kmlLayer.addListener('click', function(event) {
    var content = event.featureData.infoWindowHtml;
    var testimonial = document.getElementById('map');
    testimonial.innerHTML = content;
  });
  
}


}

var fileUploader = new FileUploader();