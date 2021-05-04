# surf-broadband-maps
 ### Surf Broadband Application for viewing, editing and creating customer maps (filters, formatting, layering, etc) via VS Code.
 
Company provides KML/KMZ files, which can be viewed in Google Earth Pro (desktop application).
 
Using _Visual Studio Code_, with extensions _VSCode Map Preview_ and [_Geo Data Viewer_](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.geo-data-viewer), KML files can be converted to JSON, GEOJSON, etc.  Additional utilities beyond Google Earth include more formatting options, filtering data sets (e.g. only show footprint with coordinates in IN, IL, MI).
 
Utilizes _Mapbox / Mapbox Studio_ for underlying map format.  Created "Surf Broadband" map template in Mapbox Studio which can be accessed via Mapbox node_module along with API Key and Token.  Must request/generate personal API Key unless the Map within Mapbox is Published and "Viewable by Anyone" with access credentials.

### Surf Broadband - Mapbox Studio Settings and Links
[Mapbox Studio](https://api.mapbox.com/styles/v1/rbsniezek/cki5pfo9r1mzf19o2gtfmq4x2.html?fresh=true&title=copy&access_token=pk.eyJ1IjoicmJzbmllemVrIiwiYSI6ImNqejNpczMwYzAxenQzaXMxYmdtanRxMnIifQ.DNdPs4k1zYZaDjgVkbdYYw)

[Map Preview](https://api.mapbox.com/styles/v1/rbsniezek/cki5pfo9r1mzf19o2gtfmq4x2.html?fresh=true&title=view&access_token=pk.eyJ1IjoicmJzbmllemVrIiwiYSI6ImNqejNpczMwYzAxenQzaXMxYmdtanRxMnIifQ.DNdPs4k1zYZaDjgVkbdYYw)

[Map Copying](https://api.mapbox.com/styles/v1/rbsniezek/cki5pfo9r1mzf19o2gtfmq4x2.html?fresh=true&title=copy&access_token=pk.eyJ1IjoicmJzbmllemVrIiwiYSI6ImNqejNpczMwYzAxenQzaXMxYmdtanRxMnIifQ.DNdPs4k1zYZaDjgVkbdYYw)

### VS Code _Geo Data Viewer_ Configuration
+ __API Token__   _pk.eyJ1IjoicmJzbmllemVrIiwiYSI6ImNqejNpczMwYzAxenQzaXMxYmdtanRxMnIifQ.DNdPs4k1zYZaDjgVkbdYYw_
+ __Style URL__   _mapbox://styles/rbsniezek/cki5pfo9r1mzf19o2gtfmq4x2_


### Project Directory Outline
1. SRC -> Files from Company _(KMZ, KML)_ and Converted Files from Company _(JSON, GEOJSON)_
2. output -> _JSON_ files that can be read by Geo Data Viewer, which runs off of keplerGL, and Screenshots for Marketing Materials
3. Mapbox -> relevant Mapbox assets
