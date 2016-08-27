/* global google */
import styles from './map-styles';
import { places, bp } from './constants';
import { applyPassive, requestIdleCallback } from './utils';
import { forEach } from 'iterall';
import smoothScroll from 'smooth-scroll';

class GoogleMap {
  constructor() {
    this.mapElement = document.querySelector('.js-google-map');
    this.scrollListener = this.scrollListener.bind(this);
    this.center = { lat: 50.0171531, lng: 21.997 };

    if (!this.mapElement) { return; }

    this.scheduleMapLoading();
  }

  initGoogleMap() {
    this.map = new google.maps.Map(this.mapElement, {
      zoom: 15,
      center: this.center,
      scrollwheel: false,
      draggable: window.innerWidth >= bp.large,
      mapTypeControl: false,
      streetViewControl: false,
      styles,
    });

    this.initMarkers();
    this.handleMapEvents();
    this.setupPlaces();
  }

  initMarkers() {
    const icon = {
      url: 'assets/images/marker.png',
      scaledSize: new google.maps.Size(21, 32),
    };

    Object.keys(places).forEach(key => {
      new google.maps.Marker({
        position: places[key].position,
        title: places[key].title,
        map: this.map,
        icon,
      });
    });
  }

  setupPlaces() {
    const placesTriggers = document.querySelectorAll('.js-places-trigger');

    const handlePlaceClick = element => {
      const placeId = element.getAttribute('data-places-id');
      const scrollOffset = window.innerWidth <= bp.medium ? 100 : 200;
      this.center = places[placeId].position;
      this.map.setCenter(this.center);

      smoothScroll.animateScroll('#places-map', null, {
        offset: scrollOffset, updateURL: false
      });
    };

    forEach(placesTriggers, place => {
      place.addEventListener('click', handlePlaceClick.bind(this, place), false);
    });
  }

  scheduleMapLoading() {
    this.handleResize();

    window.addEventListener('scroll', this.scrollListener, applyPassive());
  }

  handleMapEvents() {
    google.maps.event.addDomListener(window, 'resize', () => {
      this.map.setCenter(this.center);
      this.map.setOptions({ draggable: window.innerWidth >= bp.large })
    });

    google.maps.event.addDomListener(window, 'click', () => {
      this.map.setOptions({ draggable: true });
    });
  }

  handleResize() {
    const mapTrigger = document.querySelector('.places__list');
    this.mapTriggerOffsetTop = mapTrigger.offsetTop;
    this.windowHeight = window.innerHeight;

    window.addEventListener('resize', () => {
      this.mapTriggerOffsetTop = mapTrigger.offsetTop;
      this.windowHeight = window.innerHeight;
    });
  }

  scrollListener() {
    const documentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (this.windowHeight + documentScrollTop > this.mapTriggerOffsetTop) {
      window.removeEventListener('scroll', this.scrollListener);

      this.loadMapScript();
    }
  }

  loadMapScript() {
    window.initMap = this.initGoogleMap.bind(this);
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBO-71BQKVYtvqPhnRlo3zZ05NUlp62sw4&callback=initMap';
    requestIdleCallback(() => document.body.appendChild(script));
  }
}

export default GoogleMap;
