import subprocess, os
from django.core.management.base import BaseCommand, CommandError
from django.contrib.staticfiles.management.commands import runserver

class Command(runserver.Command):
  option_list = runserver.Command.option_list
  def inner_run(self, *args, **options):
    compass = subprocess.Popen("compass watch -c main/settings/compass.config.rb", 
      shell=True, stdin=subprocess.PIPE, stdout=self.stdout, stderr=self.stderr)
    livescript = subprocess.Popen(
      "find src/ls -type f | grep '\.ls$' | xargs livescript -cbw -o static/js",
      shell=True, stdin=subprocess.PIPE, stdout=self.stdout, stderr=self.stderr)
    try: super(Command, self).inner_run(*args, **options)
    finally:
      livescript.terminate()
      compass.terminate()
