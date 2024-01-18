jQuery(document).ready((function($){"use strict";var $latitude=44.511663,$longitude=11.342605,$map_zoom=13,$main_color="#2d313f",$saturation=-20,$brightness=5,style=[{elementType:"labels",stylers:[{saturation:$saturation}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:$main_color},{visibility:"on"},{lightness:$brightness},{saturation:$saturation}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{hue:$main_color},{visibility:"on"},{lightness:$brightness},{saturation:$saturation}]},{featureType:"poi.government",elementType:"geometry.fill",stylers:[{hue:$main_color},{visibility:"on"},{lightness:$brightness},{saturation:$saturation}]},{featureType:"poi.attraction",elementType:"geometry.fill",stylers:[{hue:$main_color},{visibility:"on"},{lightness:$brightness},{saturation:$saturation}]},{featureType:"poi.business",elementType:"geometry.fill",stylers:[{hue:$main_color},{visibility:"on"},{lightness:$brightness},{saturation:$saturation}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:$main_color},{visibility:"on"},{lightness:$brightness},{saturation:$saturation}]},{featureType:"transit.station",elementType:"geometry.fill",stylers:[{hue:$main_color},{visibility:"on"},{lightness:$brightness},{saturation:$saturation}]},{featureType:"landscape",stylers:[{hue:$main_color},{visibility:"on"},{lightness:$brightness},{saturation:$saturation}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:$main_color},{visibility:"on"},{lightness:$brightness},{saturation:$saturation}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{hue:$main_color},{visibility:"on"},{lightness:$brightness},{saturation:$saturation}]},{featureType:"water",elementType:"geometry",stylers:[{hue:$main_color},{visibility:"on"},{lightness:$brightness},{saturation:$saturation}]}],map_options={center:new google.maps.LatLng($latitude,$longitude),zoom:$map_zoom,panControl:!1,mapTypeControl:!1,streetViewControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,styles:style,clickableIcons:!1},map=new google.maps.Map(document.getElementById("container-map"),map_options),areeRilascioLayer=new google.maps.KmlLayer({url:"https://dev.bitapp.it/corrente/assets/kml/corrente_2021.kml",suppressInfoWindows:!0,preserveViewport:!0,map:map}),parcheggiLayer=new google.maps.KmlLayer({url:"https://corrente.bo.it/assets/kml/Nparcheggi-carsharing.kmz",suppressInfoWindows:!0,preserveViewport:!0,map:null}),zoneNoTransitoLayer=new google.maps.KmlLayer({url:"https://dev.bitapp.it/corrente/assets/kml/zone_rosse_2021.kml",suppressInfoWindows:!0,preserveViewport:!0,map:null});$(".btn-mappa").click((function(){var active="1"==$(this).data("active");active?(eval($(this).data("layer")).setMap(null),$(this).removeClass("active"),$(this).data("active","0")):(eval($(this).data("layer")).setMap(map),$(this).addClass("active"),$(this).data("active","1"))}))}));