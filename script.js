(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(name); // Call byeSpeaker's speak method for names starting with 'J' or 'j'.
    } else {
      helloSpeaker.speak(name); // Call helloSpeaker's speak method for other names.
    }
  }
})();