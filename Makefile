# http://stackoverflow.com/questions/18136918/how-to-get-current-directory-of-your-makefile
ROOT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
PATH_TO_ATOM=/Applications/Atom.app/Contents/MacOS/Atom

run:
	$(PATH_TO_ATOM) $(ROOT_DIR)