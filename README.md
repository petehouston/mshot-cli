# mshot-cli

CLI to take screenshots for multiple website at one using Puppeteer.

## Usage

```
$ npm i -g mshot-cli
```

```
    Usage
        $ mshot PATH_TO_CONFIG_FILE

    Example
        $ mshot config.json
```

There is only one parameter that point to your `config.json` file, which defines how to take screenshots.

Here a sample:

```js
{
    "options": {
        "path": ".",
        "viewport": {
            "width": 1280,
            "height": 720
        },
        "timeout": 5000,
        "extension": "png"
    },
    "websites": [
        "petehouston.com",
        "apple.com",
        "microsoft.com"
    ]
}
```