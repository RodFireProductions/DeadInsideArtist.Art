(function() {
  var Themes;

  Themes = function() {
    if (document.getElementById('Modes').checked === true) {
      document.documentElement.style.setProperty('--dark', 'white');
      document.documentElement.style.setProperty('--txt_light', '#2e242e');
      document.documentElement.style.setProperty('--shadow', 'rgba(10,9,10,0.47)');
    } else {
      document.documentElement.style.setProperty('--dark', '#0a090a');
      document.documentElement.style.setProperty('--txt_light', 'white');
      document.documentElement.style.setProperty('--shadow', 'rgba(255,255,255,0.2)');
    }
  };

}).call(this);
