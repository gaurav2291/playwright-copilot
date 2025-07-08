# Playwright POM Framework

This project is a Playwright Page Object Model (POM) framework designed for testing web applications. It provides a structured approach to organizing tests and page interactions, making it easier to maintain and scale your test suite.

## Project Structure

```
playwright-pom-framework
├── src
│   ├── pages
│   │   └── basePage.ts
│   ├── tests
│   │   └── example.spec.ts
│   └── utils
│       └── helpers.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd playwright-pom-framework
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the tests:**
   ```
   npx playwright test
   ```

## Usage

- The `BasePage` class in `src/pages/basePage.ts` contains common methods for page interactions such as `navigateTo`, `click`, and `fillInput`. You can extend this class to create specific page objects for your application.

- The test suite in `src/tests/example.spec.ts` demonstrates how to use the `BasePage` class to perform tests on your web application.

- Utility functions in `src/utils/helpers.ts` assist in test execution and element handling.

## Contributing

Feel free to submit issues or pull requests to improve the framework. Contributions are welcome!

## License

This project is licensed under the MIT License.