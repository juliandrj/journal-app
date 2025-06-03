# Journal App

## Instalar el entorno de pruebas
```bash
yarn add --dev jest babel-jest jest-environment-jsdom ts-jest ts-node @babel/preset-env @babel/preset-react @babel/preset-typescript @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest whatwg-fetch
```
## Agregar script a package.json
```json
"scripts": {
  ...
  "test": "jest --watchAll"
}
```
```json
"jest": {
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": [
    "<rootDir>/setup-test.ts"
  ],
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js"
  },
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.{spec,test}.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/dist/**",
    "!**/build/**",
    "!vite.config.ts",
    "!**/coverage/**"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "setup-tests.ts",
    "vite-env.d.ts"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  }
}
```
## Agregar configuración
### babel.config.cjs
```javascript
module.exports = {
  presets: [
      ['@babel/preset-env', { targets: { esmodules: true } }],
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
  ]
};
```
### setup-test.ts
```typescript
import '@testing-library/jest-dom';
import {TextEncoder} from 'util';

global.TextEncoder = TextEncoder;
```
