all:
	jade -O . src/index.jade
	jade -O . src/motion.jade
	livescript -o js -cb src/index.ls
	sass src/index.sass css/index.css
