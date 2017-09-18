---
layout: post
title: Make a Leaflet map into a Progressive Web App
categories: map webdev
tags: pwa leaflet offline
author: Nick Peihl
excerpt:
---

[//]: # (TODO <meta> theme-color, lighthouse, add to home screen, excerpt, re-order, kitty review, thumbnail, image of splash screen, link to repo/demo)

Let's make a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) from a Leaflet map. For this we'll use the [Choropleth example from the Leaflet docs](http://leafletjs.com/examples/choropleth/).

## Create a Manifest file

In order to act like a native app and install on supported mobile devices (Android only at the time of writing), we need to create a manifest.json file. The Manifest defines the name, icons, theme, and splash screen for the app. Google has a [great guide](https://developers.google.com/web/updates/2015/10/splashscreen) for creating your manifest.json file.

You should use a simple, square logo that can be identified at very small sizes. In my example, I cropped the leaves in the [SVG Leaflet logo](https://gist.github.com/hastebrot/7996274#file-leaflet-logo-svg) and created different sized PNGs per the guide above using [Gimp](https://www.gimp.org/).

## Provide fallback content

A Progressive Web App needs to provide some content for situations where JavaScript is not enabled on the client's browser. Insert a `<noscript>` tag inside the `<div id='map'>` tag of index.html.

``` html
<div id='map'>
    <noscript>
        <div>
            <h1>Error: JavaScript not enabled</h1>
            <p>This page requires JavaScript. Here are the <a href="http://www.enable-javascript.com/" target="_blank">instructions how to enable JavaScript in your web browser</a>.</p>
        </div>
    </noscript>
</div>
```

You can test this out by disabling JavaScript in your web browser's developer tools. In Chrome this is located in Settings under Debugger. Reload the page after disabling JavaScript to see the error.

## Make it responsive

One of the requirements of a Progressive Web App (PWA) is to be responsive for mobile devices. The Choropleth map size is set to 600 pixels wide and 400 pixels tall in the page CSS. The [Leaflet on Mobile](http://leafletjs.com/examples/mobile/) example shows us how to make the map full page and responsive to any screen size. So change the `<style>` section as follows.

``` html
<style>
body {
    padding: 0;
    margin: 0;
}
html, body, #map {
    height: 100%;
    width: 100vw;
}
</style>
```

Now let's change the `viewport` meta tag to limit unwanted scaling of the page by adding `maximum-scale=1.0, user-scalable=no`.

The [Workbox](https://workboxjs.org/) tool helps create the [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) part of the PWA. Make sure you have [Node.js](https://nodejs.org/en/) installed then type `npm install workbox-cli --global` in a terminal window.

You can use type `workbox generate:sw` in your terminal window to create the Service Worker file for your PWA. For this step use the defaults except change the path to just `sw.js`. We want to keep it at the root directory since we're not using any build tools like Gulp, Grunt, or npm.

Next insert the following inside a `<script>` tag just below `<div id='map'></div>` to initialize the Service Worker.

``` javascript
if(navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
  .catch(function(err) {
    console.error('Unable to register service worker.', err);
  });
}
```
Now you should try running your web app with your preferred development web server. I like `ecstatic` since I have Node.js installed already (`npm install ecstatic --global` then type `ecstatic` in your terminal window). But you can use whichever you prefer.

Load your web app in a [browser that supports Service Workers](http://caniuse.com/#feat=serviceworkers). At the time of writing Google Chrome has the best support for PWAs, though Firefox works well, too. I prefer Chrome for testing so you might want to use that to follow along.

Open the Chrome Developer Tools (Ctrl-Shift-i in Windows or Linux and Command-Option-i in Mac). Switch to the "Application" tab and choose "Service Workers" in the left sidebar. You should see something like this.

![Screenshot of Service Workers section of Chrome Developer Tools](/assets/chrome-devtools-sw.png)

By default the Service Worker stores only local HTML and JavaScript files in the browser's persistent cache. However, it currently ignores the Leaflet JavaScipt and CSS files loaded from the unpkg.com content delivery network (CDN). There are a couple of options for registering the Leaflet library in the Service Worker.

1. Download and host the Leaflet libraries locally.

2. Continue to load the libraries from the unpkg.com CDN. This is more complicated and will be covered in a separate blog post.

## Download and host Leaflet

First, follow the steps in the [Leaflet documentation](http://leafletjs.com/download.html) for "Using a Downloaded Version of Leaflet" or "Using a JavaScript package manager".

Modify your `workbox-cli-config.js` file and add `css` to the `globPatterns` array and re-run `workbox generate:sw` in your terminal to generate a new Service Worker file.

Watch the Service Workers section in Chrome Developer Tools as you reload the web page. You should see a new Service Worker being installed.

![Screenshot of Chrome Developer tools showing Service Worker being installed](/assets/chrome-devtools-sw-installing.png)

Once the Service Worker has finished installing switch to the "Network" tab in Chrome Developer Tools. Check the box next to "Offline" to simulate an offline environment. Then reload the page. You should see the states and legend appear, but no basemap. This is because the basemap is not cached for offline use. This is more complicated and will need to be covered in a different blog post.
