# cf-remix-hono

## Installation
Follow these steps to install cf-remix-hono:

1. Install the required dependencies.
    ```sh
    yarn install
    ```

## Usage
Here are the scripts to run the development server, build, deploy, and more:

1. **Start the development server**
    ```sh
    yarn dev
    ```
    This will start the Vite server and run the application in development mode.

2. **Build the application**
    ```sh
    yarn build
    ```
    This will build the application and output it to the `./build/client` directory.

3. **Deploy the application**
    ```sh
    yarn deploy
    ```
    This will deploy the application to Cloudflare Pages.

4. **Start the application in production**
    ```sh
    yarn start
    ```
    This will start the application in production mode using Wrangler.

5. **Type checking**
    ```sh
    yarn typecheck
    ```
    This will run TypeScript type checking.

6. **Generate types**
    ```sh
    yarn typegen
    ```
    This will generate type information using Wrangler.

7. **Format the code**
    ```sh
    yarn format
    ```
    This will format the code using Biome.

8. **Lint the code**
    ```sh
    yarn lint
    ```
    This will run code linting using Biome.

9. **Check the code**
    ```sh
    yarn check
    ```
    This will run code checking and apply fixes using Biome.

## Contributing

Describe how to report bugs and submit pull requests.

## License

Apache License 2.0