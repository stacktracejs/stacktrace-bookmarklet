build:
	./node_modules/.bin/uglifyjs2 src/stacktrace-bookmarklet.js -o stacktrace-bookmarklet.js
	cat src/bookmarklet-1 stacktrace-bookmarklet.js src/bookmarklet-2 > bookmarklet.html

deploy: build
	npm publish

clean:
	rm -fr stacktrace-bookmarklet.js bookmarklet.html

.PHONY: clean
