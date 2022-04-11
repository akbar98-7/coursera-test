(function (window) {
    var sayWord = "Good Bye";

    var byeSpeaker = {
        speak: function (name) {
          console.log(sayWord + " " + name);
        }
      };
      window.byeSpeaker = byeSpeaker;
    })(window);
