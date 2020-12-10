# chamahub

A front-end UI for the github user api

> Visit the live app at [https://chamahub.vercel.app/](https://chamahub.vercel.app/)

## Prerequisites

You will need the following things properly installed on your computer:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Yarn](https://yarnpkg.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd chamahub`
- `yarn install --ignore-engines`

## Running / Development

- `yarn start:local`
- Visit the app at [http://localhost:4200](http://localhost:4200).

## Building

```bash
# local
yarn build:local

# production
yarn build:production
```

> The build result will be in `./dist` directory

## Testing

```bash
# unit tests
yarn test:unit

# unit tests with coverage
yarn test:unit:coverage
```
