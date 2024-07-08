import { useEffect } from "react";
import type { Marker } from "../../types/map";

const Marker = ({ map, coordinates, icon, onClick }: Marker): null => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...coordinates),
        icon,
      });
    }
    //onClick이 있을경우 naver의 addListener api를 활용하여 marker를 클릭했을때  프롭으로 전달한 onClick함수가 실행된다.
    if (onClick) {
      naver.maps.Event.addListener(marker, "click", onClick);
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]);

  return null;
};

export default Marker;
