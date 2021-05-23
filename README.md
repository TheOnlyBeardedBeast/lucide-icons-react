# Lucide Icons React

#### What is lucide-icons-react?
lucide-icons-react is a collection of simply beautiful open source icons for React.js. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.

#### Based on Lucide Icons  ```0.15.17```
https://lucide.dev/

#### Based on react-feather  ```2.0.9```
https://github.com/feathericons/react-feather

### Installation
    yarn add lucide-icons-react
    
  or
    
    npm i lucide-icons-react

### Usage

```javascript
import React from 'react';
import { Camera } from 'lucide-icons-react';

const App = () => {
  return <Camera />
};

export default App;
```

Icons can be configured with inline props:
```javascript
<Camera color="red" size={48} />
```

If you can't use ES6 imports, it's possible to include icons from the compiled folder ./dist.
```javascript
var Camera = require('lucide-icons-react/dist/icons/camera').default;

var MyComponent = React.createClass({
  render: function () {
    return (
      <Camera />
    );
  }
});
```
You can also include the whole icon pack:

```javascript
import React from 'react';
import * as Icon from 'lucide-icons-react';

const App = () => {
  return <Icon.Camera />
};

export default App;
```
