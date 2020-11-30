# _Slightly_ Opinionated React

A _slightly_ opinionated [CRA](https://github.com/facebook/create-react-app) project intended as a starting point for side-projects that looks to use best practices as its base.

This example is for developers that enjoy using the following things in their code:
- TypeScript
  
- Functional Components

- [Styled Components](https://github.com/styled-components/styled-components)
  
- ESLint w/[Airbnb styleguide](https://github.com/airbnb/javascript/tree/master/react)
  
- Absolute imports
  
- [Cypress](https://github.com/cypress-io/cypress) and [React Testing](https://github.com/testing-library/react-testing-library) libraries


## Get Started

To get up and running, just `git clone` this repository, `npm install` and `npm start`:

- `git clone https://github.com/rhysmitchell/slightly-opinionated-react.git`

- `cd slightly-opinionated-react`

- `npm install`
  
- `npm start`

Blast off! 🚀

### Side Note
`src/utils/Config.ts` is reserved for API Keys etc. and is included in the `.gitignore` file.
This example uses [restcountries.eu](http://restcountries.eu/), so you will have to create `src/utils/Config.ts` and paste in the following:

```
export const COUNTRY_API_URL = 'https://restcountries.eu/rest/v2/all'
```
