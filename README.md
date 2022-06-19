# My Stack

## tools(framework, library)

- [turbo](https://turborepo.org)
- [pnpm](https://pnpm.io)

## Setup

```
make
```

## All scripts in proj (package.json in root)

```json
{
	"scripts": {
		"build:libs": "turbo run build --filter=./libs/*",
		"build:svel-app": "turbo run build --filter=@eiei/svelte-app"
	}
}
```
