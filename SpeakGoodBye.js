(function(window) {
  // STEP 7: Create the 'byeSpeaker' object
  var byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  // STEP 8: Attach the 'speak' method to the 'byeSpeaker' object
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;
})(window);