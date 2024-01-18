/* batteryPromise = Promise.resolve(navigator.battery);
  }

  batteryPromise.then(function (battery) {
batteryPromise.then(function (battery) {
    // Aktualisiert die Anzeige mit den initialen Werten
    document.getElementById('charging').innerHTML = battery.charging ? 'charging' : 'discharging';
    document.getElementById('chargingTime').innerHTML = battery.chargingTime + ' s';
    document.getElementById('dischargingTime').innerHTML = battery.dischargingTime + ' s';
    document.getElementById('level').innerHTML = battery.level;

    // Event-Listener hinzufügen
    battery.addEventListener('chargingchange', onChargingChange);
    battery.addEventListener('chargingtimechange', onChargingTimeChange);
    battery.addEventListener('dischargingtimechange', onDischargingTimeChange);
    battery.addEventListener('levelchange', onLevelChange);

    // Funktion für die Batterie-Level-Änderung
    function onLevelChange() {
    var level = this.level * 100;
    handleChange('Battery level changed to ' + level + '%');
    var batteryCircle = document.getElementById('batteryCircle');
    batteryCircle.style.setProperty('--level', level + '%');
    batteryCircle.innerHTML = level + '%';
}
  });
        var level = this.level * 100;
        handleChange('Battery level changed to ' + level + '%');
        var batteryCircle = document.getElementById('batteryCircle');
        batteryCircle.style.setProperty('--level', level + '%');
        batteryCircle.innerHTML = level + '%';
    }

    // Initialen Batteriezustand anzeigen
    onLevelChange.call(battery);
});

}
*/

function startDrag(e) {
  this.ontouchmove = this.onmspointermove = moveDrag;

  this.ontouchend = this.onmspointerup = function () {
    this.ontouchmove = this.onmspointermove = null;
    this.ontouchend = this.onmspointerup = null;
  }

  var pos = [this.offsetLeft, this.offsetTop];
  var that = this;
  var origin = getCoors(e);

  function moveDrag(e) {
    var currentPos = getCoors(e);
    var deltaX = currentPos[0] - origin[0];
    var deltaY = currentPos[1] - origin[1];
    this.style.left = (pos[0] + deltaX) + 'px';
    this.style.top = (pos[1] + deltaY) + 'px';
    return false; // cancels scrolling
  }

  function getCoors(e) {
    var coors = [];
    if (e.targetTouches && e.targetTouches.length) {
      var thisTouch = e.targetTouches[0];
      coors[0] = thisTouch.clientX;
      coors[1] = thisTouch.clientY;
    } else {
      coors[0] = e.clientX;
      coors[1] = e.clientY;
    }
    return coors;
  }
}

var elements = document.querySelectorAll('.test-element');
[].forEach.call(elements, function (element) {
  element.ontouchstart = element.onmspointerdown = startDrag;
});

document.ongesturechange = function () {
  return false;
}
