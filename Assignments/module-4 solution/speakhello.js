(function (window) {
    var sayWord = "Hello";
    var helloSpeaker = {
      speak: function (name) {
        console.log(sayWord + " " + name);
      }
    };
    window.helloSpeaker = helloSpeaker;
  })(window);