VENV = env
PACKAGES = packages.txt
ACTIVATE = $(VENV)/bin/activate

all:
	compass compile src/sass/index.sass -c compass.config.rb -s compressed
	livescript -o static/js/ -cb src/ls/index.ls

run:
	python manage.py runserver

migrate:
	-python manage.py schemamigration userena --auto
	-python manage.py schemamigration accounts --auto
	-python manage.py schemamigration guardian --auto
	-python manage.py migrate

init:
	-rm db.sqlite3
	rm -rf userena/migrations
	rm -rf accounts/migrations
	rm -rf guardian/migrations
	python manage.py syncdb
	python manage.py convert_to_south userena
	python manage.py convert_to_south accounts
	python manage.py convert_to_south guardian
	python manage.py migrate

env: $(ACTIVATE)
$(ACTIVATE): $(PACKAGES)
	test -d $(VENV) || virtualenv $(VENV) --no-site-packages
	. $(ACTIVATE) && pip install -Ur $(PACKAGES)
	touch $(ACTIVATE)
