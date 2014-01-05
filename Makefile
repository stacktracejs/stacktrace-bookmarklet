IFS=

build:
	./node_modules/.bin/uglifyjs2 stacktrace-bookmarklet.js -o stacktrace-bookmarklet.min.js
	sed -i '' -e '1d' README.md
	echo "# [stacktrace.js Bookmarklet](`cat stacktrace-bookmarklet.min.js`)" | cat - README.md > /tmp/README.md && mv /tmp/README.md README.md

deploy: build
	npm publish

clean:
	rm -fr stacktrace-bookmarklet.min.js

.PHONY: clean
