/* global google */
import styles from './map-styles';
import { places, bp } from './constants';
import { forEach } from 'iterall';
import smoothScroll from 'smooth-scroll';

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
      mapTypeControl: false,
      streetViewControl: false,
      styles,
    });

    this.initMarkers();
    this.handleMapEvents();
    this.setupPlaces();
  }

  initMarkers() {
    Object.keys(places).forEach(key => {
      new google.maps.Marker({
        position: places[key].position,
        title: places[key].title,
        map: this.map,
      });
    });
  }

  handleMapEvents() {
    google.maps.event.addDomListener(window, 'resize', () => {
      this.map.setCenter(this.center);
    });
  }

  setupPlaces() {
    const placesTriggers = document.querySelectorAll('.js-places-trigger');

    const handlePlaceClick = element => {
      const placeId = element.getAttribute('data-places-id');
      this.center = places[placeId].position;
      this.map.setCenter(this.center);

      if (window.innerWidth <= bp.medium) {
        smoothScroll.animateScroll('#places-map', null, { offset: 100 })
      } else {
        smoothScroll.animateScroll('#places-map', null, { offset: 200 })
      }
    };

    forEach(placesTriggers, place => {
      place.addEventListener('click', handlePlaceClick.bind(this, place), false);
    });
  }

  exportMapCallback() {
    window.initMap = this.initGoogleMap.bind(this);
  }
}

export default GoogleMap;
