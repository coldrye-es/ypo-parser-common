<a name="0.0.11"></a>
## [0.0.11](https://github.com/coldrye-es/ypo-parser-common/compare/v0.0.10...v0.0.11) (2016-05-03)


* version bump v0.0.11([e2b4fcd](https://github.com/coldrye-es/ypo-parser-common/commit/e2b4fcd))


### Chores

* **dependencies:** add dependency conventional-changelog-coldrye([674b230](https://github.com/coldrye-es/ypo-parser-common/commit/674b230))


### Code Refactoring

* **AbstractToken:** better error handling on null or undefined value during construction([513c867](https://github.com/coldrye-es/ypo-parser-common/commit/513c867))
* **AbstractTokenizer:** tokenizer is now responsible for reading the input file([81749d4](https://github.com/coldrye-es/ypo-parser-common/commit/81749d4))



<a name="0.0.10"></a>
## [0.0.10](https://github.com/coldrye-es/ypo-parser-common/compare/v0.0.9...v0.0.10) (2016-05-01)


### Bug Fixes

* **Authorship:** authorship is whitespace([5cdc981](https://github.com/coldrye-es/ypo-parser-common/commit/5cdc981))
* **Comment:** comment is whitespace([b2f70f7](https://github.com/coldrye-es/ypo-parser-common/commit/b2f70f7))


### Code Refactoring

* **tokens:** comment and emptyline are simple tokens([ad9f41e](https://github.com/coldrye-es/ypo-parser-common/commit/ad9f41e))


* update changelog([42f7dfc](https://github.com/coldrye-es/ypo-parser-common/commit/42f7dfc))
* version bump v0.0.10([0254948](https://github.com/coldrye-es/ypo-parser-common/commit/0254948))


### Styles

* fix lint problems([1074b16](https://github.com/coldrye-es/ypo-parser-common/commit/1074b16))


### Tests

* **authorship:** fix test([5041713](https://github.com/coldrye-es/ypo-parser-common/commit/5041713))



<a name="0.0.9"></a>
## [0.0.9](https://github.com/coldrye-es/ypo-parser-common/compare/v0.0.8...v0.0.9) (2016-04-26)


### Bug Fixes

* **ParseError** add line property as expected by YpoLexer ([b523220](https://github.com/coldrye-es/ypo-parser-common/commit/b523220))
* **plural** reduce number of match groups to just one ([2536fd2](https://github.com/coldrye-es/ypo-parser-common/commit/2536fd2))



<a name="0.0.8"></a>
## [0.0.8](https://github.com/coldrye-es/ypo-parser-common/compare/v0.0.7...v0.0.8) (2016-04-23)

previous NPM release is faulty and does not contain latest sources... *sigh*



<a name="0.0.7"></a>
## [0.0.7](https://github.com/coldrye-es/ypo-parser-common/compare/v0.0.5...v0.0.7) (2016-04-23)


### Code Refactoring

* fixes #11 ([8afdc2d](https://github.com/coldrye-es/ypo-parser-common/commit/8afdc2d)), closes [#11](https://github.com/coldrye-es/ypo-parser-common/issues/11)


### BREAKING CHANGES

* complete revision of the API
* plural is now a directive instead of an option
* model can now be used as a backend for visual editors



<a name="0.0.6"></a>
## 0.0.6 (2016-02-20)


* version bump v0.0.6 ([b35fdb4](https://github.com/coldrye-es/ypo-parser-common/commit/b35fdb4))
* Refactor existing sources ([b35fdb4](https://github.com/coldrye-es/ypo-parser-common/commit/b35fdb4))



<a name="0.0.5"></a>
## 0.0.5 (2016-02-10)


* version bump v0.0.5 ([1c897dc](https://github.com/coldrye-es/ypo-parser-common/commit/1c897dc))

### chore

* chore(tests): must test using basicSymbolTests ([c2d7b65](https://github.com/coldrye-es/ypo-parser-common/commit/c2d7b65))
* chore(tests): mixed up expected and actual ([fb90bed](https://github.com/coldrye-es/ypo-parser-common/commit/fb90bed))

### feat

* feat(compoundtext): add CompoundText node for combining multiple subsequent lines of text into a sin ([b4f6b9f](https://github.com/coldrye-es/ypo-parser-common/commit/b4f6b9f))

### refactor

* refactor(text): rename isLineContinuation ([17cb7f7](https://github.com/coldrye-es/ypo-parser-common/commit/17cb7f7))

### todo

* todo(node): location must be asserted ([57a3e86](https://github.com/coldrye-es/ypo-parser-common/commit/57a3e86))



<a name="0.0.4"></a>
## 0.0.4 (2016-02-08)


* version bump v0.0.4 ([70b77ad](https://github.com/coldrye-es/ypo-parser-common/commit/70b77ad))

### chore

* chore(coverage): ignore empty else ([7f5e113](https://github.com/coldrye-es/ypo-parser-common/commit/7f5e113))
* chore(dependencies): removing global babel dependency as it was deprecated ([5703e6d](https://github.com/coldrye-es/ypo-parser-common/commit/5703e6d))
* chore(lint): fix linting issues ([aa865e0](https://github.com/coldrye-es/ypo-parser-common/commit/aa865e0))
* chore(tests): fix node toString test ([1f83434](https://github.com/coldrye-es/ypo-parser-common/commit/1f83434))

### feat

* feat(namespace): add support for more complex namespaces ([5ed4b67](https://github.com/coldrye-es/ypo-parser-common/commit/5ed4b67))
* feat(text): line continuation support ([bebb25a](https://github.com/coldrye-es/ypo-parser-common/commit/bebb25a))

### fix

* fix(src): toString() must include extra information ([749a0a9](https://github.com/coldrye-es/ypo-parser-common/commit/749a0a9))



<a name="0.0.3"></a>
## 0.0.3 (2016-02-04)


* version bump v0.0.3 ([a9acc05](https://github.com/coldrye-es/ypo-parser-common/commit/a9acc05))

### chore

* chore(tests): make sure that directive is not undefined ([77e7d13](https://github.com/coldrye-es/ypo-parser-common/commit/77e7d13))

### feat

* feat(context): new context directive replaces translationid with context ([51dbde2](https://github.com/coldrye-es/ypo-parser-common/commit/51dbde2))

### fix

* fix(translationid): remove extraneous context parameter ([ab43896](https://github.com/coldrye-es/ypo-parser-common/commit/ab43896))
* fix(QNAME): was way to restrictive ([760ef4b](https://github.com/coldrye-es/ypo-parser-common/commit/760ef4b))



<a name="0.0.2"></a>
## 0.0.2 (2016-01-31)


* version bump v0.0.2 ([21a05f4](https://github.com/coldrye-es/ypo-parser-common/commit/21a05f4))

### docs

* docs(README.md): structure ([14a4514](https://github.com/coldrye-es/ypo-parser-common/commit/14a4514))

### feat

* feat(pathbuilder): add pathbuilder class ([e4860d1](https://github.com/coldrye-es/ypo-parser-common/commit/e4860d1))



<a name="0.0.1"></a>
## 0.0.1 (2016-01-30)


* importing existing sources ([ae472d9](https://github.com/coldrye-es/ypo-parser-common/commit/ae472d9))



