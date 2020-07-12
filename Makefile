VERSION=$(strip $(shell cat version))
TOP_DIR=.
SRC_DIR=$(TOP_DIR)/slides
TARGET_DIR=$(TOP_DIR)/_build
ASSET_DIR=$(TOP_DIR)/assets
TOOL_DIR=$(TOP_DIR)/tools
CLI_DIR=$(TOOL_DIR)/cli

ENGINE=$(CLI_DIR)/engine.js

MARP=node_modules/@marp-team/marp-cli/marp-cli.js --engine $(ENGINE) --theme $(ASSET_DIR)/custom.css --html true

init: install dep
	@echo "Initializing the repo..."

travis-init: install dep
	@echo "Initialize software required for travis (normally ubuntu software)"

install:
	@echo "Install software required for this repo..."

dep:
	@echo "Install dependencies required for this repo..."
	@yarn

travis: build

travis-deploy: release
	@echo "Deploy the software by travis"

run:
	@$(MARP) -s $(SRC_DIR)

build: $(TARGET_DIR)
	@$(MARP) -I slides -o $(TARGET_DIR)

build-netlify: build
	@cp -r $(SRC_DIR)/assets $(TARGET_DIR)

link-assets: $(TARGET_DIR)
	@ln -s $(SRC_DIR)/assets $(TARGET_DIR)/assets || true

copy-assets: $(TARGET_DIR)
	@rsync -arv $(SRC_DIR)/assets $(TARGET_DIR)

$(TARGET_DIR):
	@mkdir -p $@



include .makefiles/*.mk

.PHONY: build init travis-init install dep travis clean run build travis-deploy release create-pr bump-version
