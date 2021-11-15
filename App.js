/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const data = [
  {
    latitude: 22.9096899,
    longitude: 88.3918931,
  }
];

const initialRegion = {
  latitude: 22.9096899,
  longitude: 88.3918931,
}

const App = () => {

  return (
      <MapView
        ref={c => (this.mapView = c)}
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          minZoomLevel={6}
          onMapReady={() => {
              Platform.OS === 'ios' && this.mapView.animateToRegion(initialRegion, 0.8);
        }}
          onRegionChangeComplete={(region, isGesture) => {}}
          showsUserLocation={true}
          mapPadding={{
            left:25,
            right: 25
          }}
          zoomControlEnabled={true}
          showsCompass={true}
          compassOffset={{ x: 20, y: 350 }}
      >
      {
        data.map((item, key) => {
          return(
            <Marker
              key={key}
                      coordinate={{
                        latitude: parseFloat(item.latitude),
                        longitude: parseFloat(item.longitude),
                      }}
                      anchor={{x:0.5, y:0.5}}
                      zIndex={1000}
            >
              <View style={{backgroundColor: 'red', width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 25/2}}>
              </View>
            </Marker>
            
          )
        })
      }

      </MapView>
  );
};

export default App;
