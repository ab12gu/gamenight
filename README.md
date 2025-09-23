# gamenight
homepage for people to checkout gamenight

## Styleguides

[CSS Styleguide](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/CSS)


## Framework

- Currently: `Vanilla HTML/CSS/JS`
- To Add: `Svelte`
    - [https://svelte.dev/docs/kit/creating-a-project](https://svelte.dev/docs/kit/creating-a-project)
    - Editor plugins: [https://www.sveltesociety.dev/resources#editor-support](https://www.sveltesociety.dev/resources#editor-support)

## Run Webpage Locally

You only need to have python3 installed. Can be installed via website or homebrew.
- NOTE: I generally use `port 8000` for my blog site

```
$ python3 -m http.server 2000
```

Render `readme` in terminal

```
$ glow README.md
```

## Run Webpage locally via Sveltekit

Currently porting website to `svelete/sveltekit` in order to have a backend. Allows both storage of data and rendering in realtime from server rather than client-side static sites. Also allows for better code reuse.

Install `Sveltekit` (only if creating a new sveltekit app)
- You can rename `my-app` to your app name

```
$ npx sv create my-app
```

Install node version manager (`nvm`) to select right version

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Restart terminal && change node version to 22

```
$ npx install 22
$ npx use 22
$ npm install # install dependencies
```

Start local server

```
# npm run dev
```

Static site generation plugin
```
$ npm i -D @sveltejs/adapter-static # install
$ npm run build # build static site
$ npm install -g serve # run locally in root
$ serve build
```

Recommended to use `Svelte for VS Code` but there is a vim library too

NOTE: Unlike python, node version manager has its own environment when running env, with dependencies stored in `package.json` file and stores them in `node_modules\.

## Colors

- Hyperlinks: #096b6c
- Bolds: #1A5270
- Background: #bcdeff
- Text: #71548a

## Old Colors 

- Test: #947BB1
- Background: #C7E3FF
- Headers: #1A5270
