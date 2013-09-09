import os
def ProjectDir(subdir=""):
  return os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), subdir)

