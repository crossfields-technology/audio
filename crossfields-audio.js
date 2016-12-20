Polymer({
  is: 'crossfields-audio',

  properties: {
    file: {
      type: Array,
      notify: true,
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

    waitForLoad: {
      type: Boolean,
      value: false
    },

    fadeOut: {
      type: Boolean,
      value: false
    }
  },

  playSound: function(file) {
    var self = this;
    var sound = new Howl(
      {
        src: file,
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

    if(!this.waitForLoad) {
      sound.play();
    }

    sound.once('load', function() {
        sound.play();
    });

    if(this.fadeOut) {
      sound.fade(1, 0, 1000);
    }
  }
});
