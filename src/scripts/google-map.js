/* global google */
import styles from './map-styles';

const mapSelector = document.querySelector('.map');

class GoogleMap {
  constructor() {
    this.center = { lat: 50.0171531, lng: 21.997 };
    this.exportMapCallback();
  }

  initGoogleMap() {
    this.map = new google.maps.Map(mapSelector, {
      zoom: 15,
      center: this.center,
      scrollwheel: false,
      styles,
    });

    this.initMarkers();
    this.handleMapEvents();
  }

  initMarkers() {
    new google.maps.Marker({
      position: { lat: 50.0156477, lng: 21.9884377 },
      title: "Biuro na Hetmańskiej 120",
      map: this.map,
    });

    new google.maps.Marker({
      position: { lat: 50.018363, lng: 22.0031903 },
      title: "Biuro na Granicznej 4b LU-8",
      map: this.map,
    });

    new google.maps.Marker({
      position: { lat: 50.246927, lng: 21.7802773 },
      title: "Biuro na Granicznej 4b LU-8",
      map: this.map,
    });
  }

  handleMapEvents() {
    google.maps.event.addDomListener(window, 'resize', () => {
      this.map.setCenter(this.center);
    });
  }

  exportMapCallback() {
    window.initMap = this.initGoogleMap.bind(this);
  }
}

export default GoogleMap;
