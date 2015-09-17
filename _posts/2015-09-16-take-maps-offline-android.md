---
layout: post
title: Taking Online Maps Offline on Android
published: true
categories: mapping
tags: android offline mobile
---

![Geopaparazzi Screenshot](/assets/geopaparazzi-screenshot.png)

Urbanites visiting the San Juan Islands may be distraught to realize their smartphone data plans don't work outside of population centers. This mobile data 'dis-connectivity' is common knowledge to residents and some even prefer it that way.

But public employees, scientists, academics and others who work in the field and need access to maps are left in a lurch. Complete sets of aerial photos are too large and unwieldy for mobile devices. Offline-enabled vector maps such as OpenStreetMap or Apple Maps lack accuracy due to slow adoption or lack of prioritization for our islands.

At San Juan County, we're exploring ways to make authoritative vector maps and aerial imagery available to field workers with or without data connectivity.

One technique is creating local tile caches from imagery or vector basemaps that can be viewed using existing mobile apps. Tile caches are databases containing millions of image files (tiles) representing a small portion of a map at designated scales. The number of tiles increases dramatically as scales get larger. Specialized mobile apps can read these databases and load only the tiles necessary for the current viewing area and scale, thus reducing the memory load on the mobile device. Nearly all online web maps like Google Maps or OpenStreetMap rely on web servers hosting tile caches to only download the necessary tiles.

The Android app [Geopaparazzi](http://geopaparazzi.github.io/geopaparazzi) works with both online and offline maps. Using a tiny config file, you can load custom online tile maps which are automatically saved to your device for offline use. To test this, I created Geopaparazzi config files pointing to San Juan County GIS basemaps. One is a basemap showing aerial imagery from 2013. The other is a vector basemap showing authoritative address, street, and parcel data.


## Getting Started

1) Install Geopaparazzi on your Android device from the [Google Play Store](https://play.google.com/store/apps/details?id=eu.hydrologis.geopaparazzi).

2) Copy my sample [mapurl](https://gist.github.com/npeihl/bbc0fc7e7579007a7d68) files to your Android phone/tablet in the "maps" folder on your SDCard/Internal Storage. The ```mbtiles``` parameter in the mapurl file means that map tiles viewed while connected to the internet are then saved to the device for offline use.

3) Start the Geopaparazzi app and click on the Menu button (three vertical dots) at the top of the screen. Choose "Select tile source" and select one of the sjc*.mapurl files.

4) Ensure you are connected to WiFi or Cellular data. Select the "map view" button on the screen and wait for the tiles to load.

5) Before going offline, pan to the area(s) you want to view offline and zoom in and out to load all zoom levels for the area. Then you may turn on airplane mode and try panning/zooming to test that the map saved correctly.

## Notes

- The basemap tiles are saved on the device in the [mbtiles](https://www.mapbox.com/guides/an-open-platform/#mbtiles) format created by [Mapbox](http://mapbox.com).

- Geopaparazzi does not yet support the new [Vector Tiles](https://www.mapbox.com/developers/vector-tiles/) format. It only uses image tiles.

- Source basemaps may be Tiled Map Services or Esri cached MapServer services.

- Please follow the Terms and Conditions for basemaps you use.

## Find maps for your area

The USGS has 1 meter aerial imagery for most of the USA from the National Agriculure Imagery Project (NAIP). Just copy the text below into your mapurl file on your Android device.

{% highlight HTML %}
url=http://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/ZZZ/YYY/XXX
minzoom=0
maxzoom=15
type=google
format=jpg
defaultzoom=0
mbtiles=defaulttiles/_naip-tile.mbtiles
description=USGS Ortho and Satellite Imagery
{% endhighlight %}

For higher resolution imagery you could also look for a local government agency hosting Esri basemaps and modify the mapurl file accordingly. The [OpenAddresses.io](https://github.com/openaddresses/openaddresses/tree/master/sources) project has a large repository of local government map services.

Reach out to me on [Twitter](http://twitter.com/npeihl) if you have questions.
