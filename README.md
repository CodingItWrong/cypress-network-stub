# cypress-network-stub

Reproduction of an error stubbing a network request with a large JSON response (> 3 MB).

## Installation

```
$ yarn install
```

## Running

```
$ yarn start
```

Separate terminal:

```
$ yarn cypress:open
```

Then run `network.spec.js`. Note that it fails with an error:

```
GET http://localhost:3000/__cypress/xhrs/https://example.com/large.json net::ERR_CONNECTION_RESET
```

This is Cypress 4.3.0. The same problem occurs with the latest, 4.11.0. It does *not* occur with Cypress 4.2.0.

If you `yarn cypress:run` it succeeds in all Cypress versions listed above.
