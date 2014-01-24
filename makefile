all:
	jade -o . src/index.jade
	jade -o . src/motion-index.jade
	jade -o . src/motion-analyze.jade
	jade -o . src/motion-propose.jade
	jade -o . src/motion-project.jade
	jade -o . src/propose-index.jade
	jade -o . src/project-index.jade
	livescript -o js -cb src/index.ls
	sass src/index.sass css/index.css
	sass src/infopanel.sass css/infopanel.css
	sass src/motion-propose.sass css/motion-propose.css
