all:
	jade -O . src/index.jade
	jade -O . src/motion.jade
	jade -O . src/analyze.jade
	jade -O . src/propose.jade
	jade -O . src/motion-project.jade
	livescript -o js -cb src/index.ls
	sass src/index.sass css/index.css
	sass src/infopanel.sass css/infopanel.css
	sass src/propose.sass css/propose.css
