---
published: false
---

## Asynchronous Geoprocessing with Turf.js
[Turf.js](http://turfjs.com) is a JavaScript library that accomplishes many spatial analysis methods for [GeoJSON](http://GeoJSON.org) files. Since Turf uses native JavaScript it doesn't require a server backemd. Instead the processing g can be done entirely on the client's web browser. This makes Turf ideal for simple and very quick spatial analysis in web maps.

[Dropchop](http://dropchop.io) (to which I am a contributor) bundles all the Turf.js functions into an interactive web map where a client can upload add and analyze process their own GeoJSON files. All spatial analyses are accomplished entirely in the user's web browser thereby not replying on a server.

However there are a few caveats. Dropchop uses [Mapbox.js](http://github.com/Mapbox/Mapbox.js) to render GeoJSON files on a map. Mapbox.js is an extension of the popular [Leaflet](http://Leafletjs.com) web mapping library. Because Parsing and rendering large GeoJSON files on a web map is extremely slow. Dropchop doesn't set limits on the size of the files added to the map so adding a ><1 megabyte GeoJSON file might take a very long time or even crash the client's browser. While rendering the browser may become unresponsive and users are unable to interact with the map or even open other websites.



Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.
