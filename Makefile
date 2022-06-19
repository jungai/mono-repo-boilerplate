.PHONY: default install build-libs

default:
	make install

install:
	pnpm install
	make build-libs

build-libs:
	pnpm run build:libs
