all:
	jade -O . src/index.jade
	livescript -o . -cb src/index.ls
	sass src/index.sass index.css
