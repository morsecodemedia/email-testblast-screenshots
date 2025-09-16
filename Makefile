# get current directory as var
mkfile_path:=$(abspath $(lastword $(MAKEFILE_LIST)))
current_dir:=$(notdir $(patsubst %/,%,$(dir $(mkfile_path))))

help:
	@echo "targets:"
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
	| sed -n 's/^\(.*\): \(.*\)##\(.*\)/  \1|\3/p' \
	| column -t  -s '|'

.PHONY: help screenshots zip clean

screenshots: node_modules ## Generate screenshots for website
	node screenshots.js $(FILTER)

zip: node_modules  ## packages up screenshots
	zip "$(current_dir)-$$(date +"%Y-%m-%d").zip" screenshots/*

clean: ## Remove artifacts from repo
	rm -f screenshots/*
	rm -f *.zip

node_modules: package.json
	npm i
