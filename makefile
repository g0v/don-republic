all:
	-find views -type f -name '*.jade' | xargs -P 8 -n 1 -- jade --obj "{require: require, lib: {jquery: true, angular: true, semantic: true}}"  --out public
	livescript -o framework -cb framework/*.ls
	compass compile

depends:
	sudo gem install compass sass tilt --source http://rubygems.org
