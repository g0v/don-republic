VENV = env
PACKAGES = packages.txt
ACTIVATE = $(VENV)/bin/activate

all:
	compass compile src/sass/index.sass -c compass.config.rb -s compressed
	livescript -o static/js/ -cb src/ls/index.ls

run:
	python manage.py runserver

migrate:
	#-python manage.py schemamigration guardian --auto
	-python manage.py migrate

init:
	-rm db.sqlite3
	python manage.py syncdb
	python manage.py migrate

env: $(ACTIVATE)
$(ACTIVATE): $(PACKAGES)
	test -d $(VENV) || virtualenv $(VENV) --no-site-packages
	. $(ACTIVATE) && pip install -Ur $(PACKAGES)
	touch $(ACTIVATE)
