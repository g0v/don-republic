all:
	-find views -type f -name '*.jade' | xargs -P 8 -n 1 -- jade --obj "{require: require, lib: {jquery: true, angular: true, semantic: true}}"  --out public
	livescript -o framework -cb framework/*.ls
	compass compile

depends:
	sudo gem install compass sass tilt --source http://rubygems.org

clean:
	git checkout framework/simple.js
	git checkout framework/index.js
	git checkout public/index.html
	git checkout public/issue-content-intro.html
	git checkout public/proposal-content-intro.html
	git checkout public/proposal-content-plan-chapter.html
	git checkout public/proposal-content-plan-chapters.html
	git checkout public/timeline-proposals.html
