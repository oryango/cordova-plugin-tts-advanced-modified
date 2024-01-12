/*

    Cordova Text-to-Speech Plugin
    https://github.com/vilic/cordova-plugin-tts

    by VILIC VANE
    https://github.com/vilic

    MIT License

*/

exports.speak = function (text) {
    const start = new Date().valueOf()
    var options = {};
    if (typeof text == "string") {
      options.text = text;
    } else {
      options = text;
    }
    
    cordova.exec((result)=>{
        const now = new Date().valueOf();
        if(result.type === "boundary") {
            console.log({
                ...result,
                elapsedTime: now - start,
                currentWord: text.substr(result.charIndex, result.charLen),
            });
        } else {
            console.log({
                ...result,
                elapsedTime: now - start,
            });
        }
        
    }, null, "TTS", "speak", [options]);
};

exports.stop = function () {
  return new Promise(function (resolve, reject) {
    cordova.exec(resolve, reject, "TTS", "stop", []);
  });
};

exports.checkLanguage = function () {
  return new Promise(function (resolve, reject) {
    cordova.exec(resolve, reject, "TTS", "checkLanguage", []);
  });
};

exports.getVoices = function () {
  return new Promise(function (resolve, reject) {
    cordova.exec(resolve, reject, "TTS", "getVoices", []);
  });
};

exports.openInstallTts = function () {
  return new Promise(function (resolve, reject) {
    cordova.exec(resolve, reject, "TTS", "openInstallTts", []);
  });
};
