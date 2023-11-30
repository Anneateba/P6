 batteryPromise = Promise.resolve(navigator.battery);
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
