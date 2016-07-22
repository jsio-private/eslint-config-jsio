# eslint-config-jsio

## Install

```
$ npm install --save-dev eslint jsio-private/eslint-config-jsio
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
	"scripts": {
		"lint": "eslint ."
	},
	"devDependencies": {
		"eslint": "^2.13.1",
        "eslint-config-jsio": "github:jsio-private/eslint-config-jsio",
	},
	"eslintConfig": {
		"extends": "jsio"
	}
}
```

Then lint with `$ npm run lint`.

