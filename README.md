# Journal App

## Instalar el entorno de pruebas
```bash
yarn add --dev jest babel-jest jest-environment-jsdom ts-jest ts-node @babel/preset-env @babel/preset-react @babel/preset-typescript @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest whatwg-fetch
```
## Instalar dependencias de AXE
```bash
yarn add --dev jest-axe @types/jest-axe
```
## Agregar script a package.json
```json
"scripts": {
  ...
  "test": "jest --watchAll --testMatch='**/!(*.axe).test.(ts|tsx)'",
  "test:accessibility": "jest --testMatch='**/*.axe.test.tsx'"
}
```
Así se separa la ejecución de los tests de accesibilidad de los demás. Todos los ficheros *.axe.tests.ts o tsx son tests de accesibilidad.
```json
"jest": {
  "preset": "ts-jest",
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": [
    "<rootDir>/setup-test.ts"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^../env$": "<rootDir>/tests/__mocks__/env.ts",
    "^./firebaseConfig$": "<rootDir>/tests/__mocks__/firebase-config.ts", /* OJO: Nada puede llamarse "config" únicamente porque causa un error con @testing-library/dom */
    "^../../firebase/providers$": "<rootDir>/tests/__mocks__/firebase-providers.ts",
    "^../../../src/firebase/providers$": "<rootDir>/tests/__mocks__/firebase-providers.ts",
    "^firebase/firestore/lite$": "<rootDir>/tests/__mocks__/firebase-lite.ts"
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
  "transformIgnorePatterns": [
    "node_modules/firebase/.*"
  ],
  "transform": {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        "tsconfig": "tsconfig.jest.json"
      }
    ]
  }
}
```
## Agregar configuración
### tsconfig.jest.json
```json
{
  "extends": "./tsconfig.app.json",
  "esModuleInterop": true,
  "compilerOptions": {
      "jsx": "react-jsx",
      "esModuleInterop": true
  },
  "include": [
      "src",
      "tests"
  ]
}
```
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
import 'whatwg-fetch';
import {TextEncoder} from 'util';

global.TextEncoder = TextEncoder;
```
