test("a basic test example", function () {
	ok(true, "this test is fine");
	var value = "hello";
});

test('detect utf-8 in text of only latin', function () {
	equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/cp866/latin866.txt` )
		).encoding, 'utf8', 'return utf8');
	equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/cp1251/latin1251.txt` )
		).encoding, 'utf8', 'return utf8');
	equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/utf8/latinUTF8.txt` )
		).encoding, 'utf8', 'return utf8');
});

test('detect utf-8 in text of only latin cp866', function () {
	equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/cp866/latin866.txt` )
		).encoding, 'cp866', 'return utf8');
});

test('detect utf-8 in text of only latin cp1251', function () {
	equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/cp1251/latin1251.txt` )
		).encoding, 'cp866', 'return utf8');
});

test('detect utf-8 in text of only latin utf8', function () {
	equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/utf8/latinUTF8.txt` )
		).encoding, 'cp866', 'return utf8');
});

test('detect cp866 in text of only cyrillic', function () {
	equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/cp866/latin866.txt` )
		).encoding, 'cp866', 'return cp866');
});

test('detect cp1251 in text of only cyrillic', function () {
	equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/cp866/latin866.txt` )
		).encoding, 'cp1251', 'return cp1251');
});

test('detect utf8 in text of only cyrillic', function () {
	equal(
		autoenc.detectEncoding(
			fs.readFileSync( `${path}/cp866/latin866.txt` )
		).encoding, 'utf8', 'return utf8');
});
