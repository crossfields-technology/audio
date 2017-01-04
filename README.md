# \<crossfields-audio\>

The `crossfields-audio` element exposes audio to the background on any page once and audio file is supplied.

```html
<crossfields-audio audio-files="{}" text-speech="{}"></crossfields-audio>
```

```
audio-files="{
  autoplay: true,
  files: ['./audio/somefile.mp3', './audio/somefile.webm'],
  fade-out: false,
  loop: false,
  volume: 0.5
}"
```

```
text-speech="{
  api-key: '<key>',
  text: 'This is a test',
  language: 'en-au'
}"
```

With `auto-play` set to `true`, the element will automatically begin playing on
load as long a file is specified.

With `fade-out` set to `true` it the audio will fade out at the end of the audio
clip.

## Howlerjs

Utilising [howler.js](https://github.com/goldfire/howler.js) for an audio library.

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
