all:
	-find views -type f -name '*.jade' | xargs -P 8 -n 1 -- jade --obj "{require: require}"  --out views
	livescript -o framework -cb framework/*.ls
	-mkdir css
	sass sass/level-one.sass css/level-one.css
	sass sass/level-two-gray.sass css/level-two-gray.css
	sass sass/level-two.sass css/level-two.css
	sass sass/main.sass css/main.css
	sass sass/page.sass css/page.css
