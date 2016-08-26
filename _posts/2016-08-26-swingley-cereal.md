---
layout: post
title: Why I starred swingley/cereal
categories:
- Why-I-Starred
- mapping
tags: github maps arcgis
stardate: 2013-12-02T00:35:31Z
gh_id: 10561745
author: Nick Peihl
excerpt: I starred the Cereal repository on GitHub on December 2, 2013. Cereal can translate an esri/Map instance from the ArcGIS JavaScript API and return a JSON file that matches the ArcGIS Web Map JSON specification.
thumbnail: /assets/cereal.png
---

![Bowl of Cereal](/assets/cereal.png)

[swingley/cereal](https://github.com/swingley/cereal){:target="_blank"}

I starred the Cereal repository on GitHub on December 2, 2013. Cereal can translate an esri/Map instance from the [ArcGIS JavaScript API](https://developers.arcgis.com/javascript/){:target="_blank"} and return a JSON file that matches the [ArcGIS Web Map JSON specification](http://resources.arcgis.com/en/help/arcgis-web-map-json/#/Web_map_format_overview/02qt00000007000000/){:target="_blank"}.

Cereal appealed to me because a client asked for the ability to save the state of a custom web application. The idea was they could pan, zoom and draw on our custom web application and then save the map state and share it with someone else. Althought I never implemented the feature request, here are two ways I think it would work.

# Save map state on a server
1. The custom application would have a "Save" button with an onClick function that passes the esri/Map instance to Cereal to generate JSON compatible with the ArcGIS Web Map specification.
2. The JSON could be saved to a database on the server with a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier){:target="_blank"}.
3. The application could use a query string with the UUID to request the JSON from the database and pass the JSON as a string to the [arcgisUtils.createMap](https://developers.arcgis.com/javascript/3/jsapi/esri.arcgis.utils-amd.html){:target="_blank"} function to generate the map.

# Save map state as a file
1. The "Save" button's onClick function passes the esri/Map instance to Cereal and generates a JSON file for the user to save to their computer.
2. The saved JSON file could be shared with others via email or social media.
3. The JSON file can be drag and dropped onto the custom web application which then passes the contents of the file to the [arcgisUtils.createMap](https://developers.arcgis.com/javascript/3/jsapi/esri.arcgis.utils-amd.html){:target="_blank"} function to generate the map.

The creator of Cereal, [Derek Swingley](http://twitter.com/derekswingley){:target="_blank"}, formerly worked for [Esri](http://esri.com){:target="_blank"} as one of the developers of the [ArcGIS JavaScript API](https://developers.arcgis.com/javascript/){:target="_blank"}.

*"Why I starred" is a series of articles describing projects I star on GitHub and why I found them interesting. My hope is that you'll find them interesting as well.*
