'use strict';
var iconv = require('iconv-lite');

function summarizeFreqs(freq, str) {
	var sum = 0;
	for (var i = 0; i < str.length; i++) {
		sum += (freq[str[i]] || 0);
	}
	return sum;
}

function detectEncoding(buf) {
	var buffer = new Buffer(buf);
	var text1251 = iconv.decode(buffer, 'cp1251');

	var freq = {};
	for (var i = 0; i < text1251.length; i++) {
		// TODO: сделать через safeinc
		if (text1251[i] in freq) {
			freq[text1251[i]]++;
		} else {
			freq[text1251[i]] = 1;
		}
	}

	var probUtf8 = summarizeFreqs(freq, 'РС');
	var probCp866 = summarizeFreqs(freq, '©ЄҐ­Ј§ўЇ®«¤¦¬Ўр‰–“Љ…Ќѓ�™‡•љ”›ЂЏђЋ‹„†ќџ—‘Њ€’њЃћ');
	var probCp1251 = summarizeFreqs(freq, 'ёйцукенгшщзхъфывапролджэячсмитьбюЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ');

	var encoding;
	// Собственно детектор
	// Многие константы - от балды
	if (probUtf8 / probCp866 > 0.73 && probUtf8 / probCp1251 > 0.73) {
		encoding = 'utf8';
	} else if (probCp866 / probCp1251 > 1) {
		encoding = 'cp866';
	} else {
		encoding = 'cp1251';
	}

	return {
		encoding : encoding,
		text: iconv.decode(buffer, encoding),
	};
}

module.exports.detectEncoding = detectEncoding;
