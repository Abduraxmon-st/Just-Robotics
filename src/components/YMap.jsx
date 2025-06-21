import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const YMap = () => {
   const currentMap = {
    center: [41.318464, 69.278316],
    zoom: 18,
    placemark: {
      coords: [41.318464, 69.278316],
      caption: 'Just Art',
      balloon: 'Just Art'
    }
  };
  const selectedMap = 'Just-Art-location';
  return (
    <YMaps>
         <Map
            defaultState={{
               center: currentMap.center,
               zoom: currentMap.zoom,
            }}
            key={selectedMap}
            width="100%"
            height="500px">
            <Placemark
               geometry={currentMap.placemark.coords}
               properties={{
               iconCaption: currentMap.placemark.caption,
               balloonContent: currentMap.placemark.balloon,
               }}
               options={{
               preset: "islands#redIcon",
               }}
            />
            </Map>
      </YMaps>
  )
}
