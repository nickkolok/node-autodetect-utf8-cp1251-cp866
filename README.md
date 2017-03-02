## node-autodetect-utf8-cp1251-cp866
Autodetect Buffer encoding (cyr)

## Install
```bash
$ npm install node-autodetect-utf8-cp1251-cp866
```

## Usage
```js
const autoenc = require('node-autodetect-utf8-cp1251-cp866');
const fs = require('fs');

let buff = fs.readFileSync('./any.txt');
console.log(autoenc.detectEncoding(buff).encoding);
////////////////////////////
// or
////////////////////////////
const autoenc = require('node-autodetect-utf8-cp1251-cp866');
const fs = require('fs');

fs.readFile('./any.txt', (err, buff) => {
    if (err) {
        throw err;
    }
    console.log(autoenc.detectEncoding(buff).encoding);
});
////////////////////////////
// or
////////////////////////////
const autoenc = require('node-autodetect-utf8-cp1251-cp866');
const fs = require('fs');

let ps = new Promise((resolve, reject) => {
	fs.readFile('any.txt', (err, buff) => {
		if (err) {
			reject(err);
		}
		resolve(autoenc.detectEncoding(buff).encoding);
	});
});

ps.then(encoding => console.log(encoding));
////////////////////////////
// or
////////////////////////////
// This example for browser and browserify
const iconv = require('iconv-lite');
const autoenc = require('node-autodetect-utf8-cp1251-cp866');

function codeLoad() {

	var readers = [];
	// Closure to capture the file information.
	var f = document.getElementById('file-load').files[0];
	var reader = new FileReader();
	reader.onload = (function(theFile) {
		return function(e) {
			try {
				encoding = autoenc.detectEncoding(e.target.result).encoding;
				var text = iconv.decode(new Buffer(e.target.result), encoding);
				return {
					fileText: text,
					fileName: theFile.name,
					fileEnc: encoding
				};
			} catch (err) {
				alert('Could not read ' + theFile.name);
				console.log(err);
			}
		};
	})(f);
	reader.readAsArrayBuffer(f);
};
```