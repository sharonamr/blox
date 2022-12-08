<p align="center">
  <a href="[https://github.com/sharonamr/blox](https://github.com/sharonamr/blox)">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/3920806/205497219-f194c30e-4e6d-4ee6-8687-c7d04408d628.png">
      <img width="143" alt="blox-logo-light" src="https://user-images.githubusercontent.com/3920806/205497048-c7de4f67-a7cd-42e4-aa77-97ceddad0d62.png">
    </picture>
  </a>
</p>
<h4 align="center">Component library framework for creating UI building blocks</h4>
<br/>
<p align="center">
  <a href="https://github.com/sharonamr/blox/actions/workflows/publish.yml">
    <img src="https://github.com/sharonamr/blox/actions/workflows/publish.yml/badge.svg" alt="Publish status" />
  </a>
  <a href="https://github.com/sharonamr/blox/actions/workflows/actions.yml">
    <img src="https://github.com/sharonamr/blox/actions/workflows/actions.yml/badge.svg" alt="Verify status" />
  </a>
  <a href="https://github.com/sharonamr/blox/actions/workflows/deploy-demo.yml">
    <img src="https://github.com/sharonamr/blox/actions/workflows/deploy-demo.yml/badge.svg" alt="Demo status" />
  </a>
</p>
<br/>

## Getting Started
⚠️ Make sure to use node 18.
You can use [nvm](https://github.com/nvm-sh/nvm) for that: `nvm use 18`
```
npx create-blox-app@latest my-app
cd my-app
npm i
npm start
```
**Next**, play around with the `md` and `tsx` files under `packages/docs/data`

## Blox [demo](https://sharonamr.github.io/blox)
<a href="https://sharonamr.github.io/blox">
  <img width="540px" alt="image" src="https://user-images.githubusercontent.com/3920806/206418206-09c0868c-8cc7-4bc3-a4fe-893ae6fde039.png">
</a>

Check out the [live demo](https://sharonamr.github.io/blox)

## What is it good for?
Getting started with building your component lib together with an awesome catalog app to display it.
## Why choose **blox**?
It is definitely a matter of taste, but:
- It is super fast ⚡ - a [vite](https://vitejs.dev/) react app 
- It uses [esbuild-wasm](https://github.com/evanw/esbuild) to transpile your blox code at runtime, meaning you can let your component lib consumer edit the examples at runtime.
<img width="540px" src="https://user-images.githubusercontent.com/3920806/206411790-2fa0360a-9d60-4316-b33e-47ddb73ad34d.gif" alt="Live code editing" />

- You edit markdown files, so there is no limit to the way you build your components example pages. Check out [Button.md](https://github.com/sharonamr/blox/blob/main/packages/docs/data/Button.md) example.
- **EVERYTHING** is customizable, it can easily become a completely different app than the default one (a complete guide on how to do that will be added soon).

## Contributing
Contributions Are more than welcome!

- 📥 Pull requests and 🌟 Stars are always welcome.
- Read our [contributing guide](CONTRIBUTING.md) to get started.
