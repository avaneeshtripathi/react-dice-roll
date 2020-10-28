# react-dice-roll

A highly customizable dice roll package built in react.


## [Live Demo](https://codesandbox.io/s/dazzling-curie-s4tj7)

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install) to install `react-dice-roll`.

```bash
yarn add react-dice-roll
```

or using [npm](https://www.npmjs.com/get-npm)

```bash
npm install react-dice-roll
```


## Usage

```jsx
import Dice from 'react-dice-roll';
```

```jsx
<Dice onRoll={(value) => console.log(value)} />
```

## Usage

|     Prop     |       Type      | Default |             Description               |
| :----------: | :-------------: | :-----: | :-----------------------------------: |
| rollingTime  |     number      |   1000  | Rolling time for dice in milliseconds |
|    onRoll    | (value) => void |    -    | Function which receives the values between 1 - 6 after the dice roll |
|    triggers  |     string[]    | ['click'] | Accepts an array of key strings which replaces the default trigger of dice roll `onClick`. Multiple key strings can be passed as an array including the `click` to use multiple triggers for dice roll key. eg: ['Enter', 'a', 'click'] |
| defaultValue |  number (1-6)   |    6    | Default value of the dice before rolling |
|     size     |     number      |   250   | Dimensions of the dice in pixels |
|    sound     |     string      |    -    | URL for the sound to play on dice roll |
|   disabled   |     boolean     |    -    | Whether the dice is disabled or not |
|    faces     |    string[]     |    -    | Array of image urls for custom sides of the dice |
|    faceBg    |     string      |    -    | Custom background color for the dice face |
|  placement   | top-left, top-right, bottom-left, bottom-right | - | Placement of the device if put inside a relative positioned element |
|  cheatValue  |  number (1-6)   |    -    | Cheat Value for the dice. If passed, dice will always roll to this value |


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
