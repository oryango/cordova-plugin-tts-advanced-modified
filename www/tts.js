/*

    Cordova Text-to-Speech Plugin
    https://github.com/vilic/cordova-plugin-tts

    by VILIC VANE
    https://github.com/vilic

    MIT License

*/

exports.speak = function (text) {
  return new Promise(function (resolve, reject) {
    const start = new Date().valueOf()
    var options = {};
    if (typeof text == "string") {
      options.text = text;
    } else {
      options = text;
    }
    
    cordova.exec((result)=>{
        const now = new Date().valueOf();
        const eventData = {
            ...result,
            elapsedTime: now - start,
        };
        if(result.type === "boundary") {
            const currentWord = typeof text == "string" ? text.substr(result.charIndex, result.charLen) : text.text.substr(result.charIndex, result.charLen)
            eventData.currentWord = currentWord
        } else if (result.type === "end") {
            resolve(eventData)
        }
        console.log(eventData);
        
        
    }, reject, "TTS", "speak", [options]);
  });
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
