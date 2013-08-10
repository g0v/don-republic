all:
	jade -O . src/index.jade
	jade -O . src/motion.jade
	jade -O . src/analyze.jade
	livescript -o js -cb src/index.ls
	sass src/index.sass css/index.css
	sass src/infopanel.sass css/infopanel.css
