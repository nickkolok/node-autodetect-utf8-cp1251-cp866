test('detect utf-8 in text of only latin', function () {
	assert.equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/cp866/latin866.txt` )
		).encoding, 'utf8', 'return utf8');
	assert.equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/cp1251/latin1251.txt` )
		).encoding, 'utf8', 'return utf8');
	assert.equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/utf8/latinUTF8.txt` )
		).encoding, 'utf8', 'return utf8');
});

test('detect cp866 in text of only cyrillic', function () {
	assert.equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/cp866/cyrillic866.txt` )
		).encoding, 'cp866', 'return cp866');
});

test('detect cp1251 in text of only cyrillic', function () {
	assert.equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/cp1251/cyrillic1251.txt` )
		).encoding, 'cp1251', 'return cp1251');
});

test('detect utf8 in text of only cyrillic', function () {
	assert.equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/utf8/cyrillicUTF8.txt` )
		).encoding, 'utf8', 'return utf8');
	assert.equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/utf8/cyrillicUTF8short.txt` )
		).encoding, 'utf8', 'return utf8');
});
