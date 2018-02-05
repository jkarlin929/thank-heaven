import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
      <div>
        <img className="mapsImage" src="https://maps.googleapis.com/maps/api/staticmap?center=Forest+Hills,Queens,NY&zoom=15&size=800x400&maptype=roadmap
        &markers=color:purple%7Clabel:ThankHeaven%7C40.718943,-73.84214459999998&key=AIzaSyDtSyQ0ECB6Sa-aI-iN56oEB37RT397ghs" alt="Google Maps Image, See Get Directions" />
        <span className="mapAddress">
          <p>72-18 Austin St</p>
          <p>Forest Hills, NY 11375</p>
        {/*link to get directions to store redirected to google maps*/}
          <a href="https://www.google.com/maps/dir//''/@40.7191005,-73.911974,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x0:0xbd4de4276d692829!2m2!1d-73.8421057!2d40.7189915!3e3"><button id="buttonJ">Get Directions</button></a>
        </span>
      </div>
    );
  }
}
export default Map;