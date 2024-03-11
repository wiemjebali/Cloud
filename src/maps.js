import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
  
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: '36,8764' , lng: '10,3253' }, 
      zoom: 12
    });
  }

  render() {
    return (
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    );
  }
}

export default Map;
