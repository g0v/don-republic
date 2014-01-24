all:
	-find views -type f -name '*.jade' | xargs -P 8 -n 1 -- jade --obj "{require: require}"  --out views
	livescript -o framework -cb framework/*.ls
	-mkdir css
	sass --compass sass/level-one.sass css/level-one.css
	sass --compass sass/level-two-gray.sass css/level-two-gray.css
	sass --compass sass/level-two.sass css/level-two.css
	sass --compass sass/main.sass css/main.css
	sass --compass sass/page.sass css/page.css

depends:
	sudo gem install compass sass tilt --source http://rubygems.org
