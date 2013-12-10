all:
	jade -O . src/index.jade
	jade -O . src/motion-index.jade
	jade -O . src/motion-analyze.jade
	jade -O . src/motion-propose.jade
	jade -O . src/motion-project.jade
	jade -O . src/propose-index.jade
	jade -O . src/project-index.jade
	livescript -o js -cb src/index.ls
	sass sass/index.sass css/index.css
	sass sass/infopanel.sass css/infopanel.css
	sass sass/motion-propose.sass css/motion-propose.css
