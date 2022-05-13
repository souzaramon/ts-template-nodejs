<div align="center">
  <img width="80" src="/.github/logo.svg" />
</div>

# template-nodejs-interview

> A simple starter template to write some nodejs interview questions

### How it works

```sh
$ yarn dev
```

Any file inside `src/questions` will be dynamically imported, and if a `run` method is exported it will be executed (in watch mode).


```sh
$ yarn dev nameOfQuestion
```

If a `run` method is exported it will be executed (in watch mode).

```sh
$ yarn test
```

Any test file (.spec, .test) inside `src/questions` will be executed

### License

MIT
