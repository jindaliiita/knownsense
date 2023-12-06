if (navigator.clipboard) {
  console.log('Clipboard API available');
}

function writeToClipboard(text, callback) {
  navigator.clipboard.writeText(text)
    .then(() => {
      // Success
      if (callback && typeof callback === 'function') {
        callback(null);
      }
    })
    .catch((error) => {
      // Error
      if (callback && typeof callback === 'function') {
        callback(error);
      }
    });
}

function readUsingNavigator(text, callback) {
  navigator.clipboard.readText()
    .then((resp) => {
      // Success
      if (callback && typeof callback === 'function') {
        callback(resp);
      }
    })
    .catch((error) => {
      // Error
      if (callback && typeof callback === 'function') {
        callback(error);
      }
    });
}

writeToClipboard('This text is now in the clipboard', function (error) {
  if (error) {
    console.error('Error copying to clipboard:', error);
  } else {
    console.log('Text successfully copied to clipboard!');
  }
});