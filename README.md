# README

## Styleguides

[CSS Styleguide](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/CSS)


## Framework

- Currently: `Vanilla HTML/CSS/JS`
- To Add: `Svelte`
    - [https://svelte.dev/docs/kit/creating-a-project](https://svelte.dev/docs/kit/creating-a-project)
    - Editor plugins: [https://www.sveltesociety.dev/resources#editor-support](https://www.sveltesociety.dev/resources#editor-support)
    - [Tailwind for Sveltekit](https://tailwindcss.com/docs/installation/framework-guides/sveltekit)
    - UnoCSS

## Render `readme` in terminal

```
$ glow README.md
```


### SVELTE

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).


## Run Webpage locally via Sveltekit

Currently porting website to `svelete/sveltekit` in order to have a backend. Allows both storage of data and rendering in realtime from server rather than client-side static sites. Also allows for better code reuse.

Install `Sveltekit` & CSS framework (only if creating a new sveltekit app)
- You can rename `my-app` to your app name

```
$ npx sv create my-app
$ npm install -D unocss
$ npx add tailwindcss # NOT USED
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

Static site generation plugin
```
$ npm i -D @sveltejs/adapter-static # install
$ npm run build # build static site (or normal site depends on what u defined in config)
$ npm install -g serve # run locally in root
```


Recommended to use `Svelte for VS Code` but there is a vim library too

NOTE: Unlike python, node version manager has its own environment when running env, with dependencies stored in `package.json` file and stores them in `node_modules`.

### CSS Plugin Installation Options

I started with tailwindcss, but watched a few things and decided to use unocss instead. I like how it doesn't have pre-existing styles, so its faster. And allows me to define the styles to use inline like tailwind. For a singular website, you use the same styles consistently, so why not defined them yourself ?!?
```
$ npx sv add tailwindcss # add tailwindcss
$ npx sv add unocss # add unocss
$ npm install -D unocss # alt add unocss
```

## Colors

- Hyperlinks: #096b6c
- Bolds: #1A5270
- Background: #bcdeff
- Text: #71548a


## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
$ npx sv create

# create a new project in my-app
$ npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
# start a development server
$ npm run dev

# flag to open the app in a new browser tab
$ npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
$ npm run build
```

## Preview Site

You can preview the production build with either one of these commands:
```sh
# Need to rebuild site before running preview,  run in root
$ npm run preview
$ serve build -l 1000
```

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
