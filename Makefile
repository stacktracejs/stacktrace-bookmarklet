build:
	./node_modules/.bin/uglifyjs2 stacktrace-bookmarklet.js -o stacktrace-bookmarklet.min.js

deploy: build
	npm publish

clean:
	rm -fr stacktrace-bookmarklet.min.js

.PHONY: clean
