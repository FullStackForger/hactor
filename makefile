test:
	@node node_modules/.bin/lab
test-cov:
	@node node_modules/.bin/lab -v -t 100
test-cov-html:
	@node node_modules/.bin/lab -v -r html -o coverage.html
test-cov-html!:
	@node node_modules/.bin/lab -v -r html -o coverage.html
	@open coverage.html

.PHONY: test test-cov test-cov-html test-cov-html!