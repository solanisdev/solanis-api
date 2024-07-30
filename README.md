# Solanis Api

This is an API developed with a DDD architecture divided into User, Annotation, Dashboard, and Widgets. It is the main pillar for Solanis to function correctly.

## Contents

- [Installation](#Installation)
- [License](#License)

## Installation

First, clone the project:

```bash
  git clone git@github.com:solanisdev/solanis-api.git
  cd solanis-api
```

After cloning, you can install the project's dependencies:

```bash
  yarn install
```

Once the dependencies are installed, generate the Prisma artifacts:

```bash
  yarn prisma generate
```

After generating the artifacts, run the command to start the API:

```bash
  yarn run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
