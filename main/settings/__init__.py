import os, importlib, string

# writing __builtins__ seems not a good idea.
# use variables.py instead.
# from os.path import dirname as dname
# __builtins__.PROJECT_DIR = dname(dname(dname(__file__)))

def load_config(settings):
  for v in dir(settings):
    if v.startswith("__"): continue
    globals()[v] = getattr(settings, v)

# import settings: default -> local -> env. incremental overwrite 
# module name is suggested to have "user_" prefix in DJANGO_USER_SETTINGS 
# example: user_kirby
used_settings = []
for name in ["default", "local", (os.environ.get("DJANGO_USER_SETTINGS") or "none")]:
  try: 
    load_config(importlib.import_module("main.settings.%s"%name))
    used_settings += [name]
  except ImportError: pass
print("import setting order: %s"%string.join(used_settings))
