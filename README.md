# \<crossfields-audio\>

The `crossfields-audio` element exposes audio to the background on any page once and audio file is supplied.

```html
<crossfields-audio
    auto-play
    audio-file="['./audio/somefile.mp3', './audio/somefile.webm']"
    fade-out="false"
    loop="false"
    volume="0.5"
    ></crossfields-audio>
```

With `auto-play` set to `true`, the element will automatically begin playing on
load as long a file is specified.

With `fade-out` set to `true` it the audio will fade out at the end of the audio
clip.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
