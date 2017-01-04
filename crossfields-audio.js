Polymer({
  is: 'crossfields-audio',

  properties: {
    audioFiles: {
      type: Array,
      observer: 'playSound'
    },

    autoplay: {
      type: Boolean,
      value: false
    },

    loop: {
      type: Boolean,
      value: false
    },

    volume: {
      type: Number,
      value: 0.5
    },

    fadeOut: {
      type: Boolean,
      value: false
    }
  },

  playSound: function(audioFiles) {
    var self = this;
    var sound = new Howl(
      {
        src: audioFiles,
        autoplay: self.autoplay,
        loop: self.loop,
        volume: self.volume
      }
    );

    sound.on('end', function() {
      self.fire('audio-ended');
    });

    sound.on('play', function() {
      self.fire('audio-started');
    });

    sound.once('load', function() {
      sound.play();
    });

    if(self.fadeOut) {
      sound.fade(1, 0, 1000);
    }
  }
});
