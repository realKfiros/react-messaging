THIS PACKAGE IS IN EARLY DEVELOPMENT!

<p align="center">
    <img src="https://raw.githubusercontent.com/realKfiros/react-messaging/master/assets/screenshot-1.png?raw=true"  width="480"/>
</p>

# react-messaging

[![NPM](https://nodei.co/npm/react-messaging.png)](https://nodei.co/npm/react-messaging/)  
![npm](https://img.shields.io/npm/dw/react-messaging)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/react-messaging)
![npm (tag)](https://img.shields.io/npm/v/react-messaging/latest)
![NPM](https://img.shields.io/npm/l/react-messaging)

The perfect React chat component.

## Installation

```
npm i react-messaging
```

## Example

```ts
import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import { Chat } from 'react-messaging';

export function Example() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    initMessages();
  }, []);

  function initMessages() {
    setMessages([
      {
        _id: '101',
        text: 'Hello',
        user: {
          _id: '26',
          name: 'Andrew Robertson',
          username: 'RobboSZN',
          avatar:
            'https://tmssl.akamaized.net/images/portrait/originals/234803-1559827085.jpg',
        },
        date: new Date(),
      },
      {
        _id: '102',
        text: 'Hi',
        user: {
          _id: '100',
          name: 'Jurgen Klopp',
          username: 'KloppoSZN',
          avatar:
            'https://i.guim.co.uk/img/media/5445143eab4f7ab92cd015aff5140b60174308a9/162_10_1745_1047/master/1745.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b017b1381457ec79ad4922db8e295a78',
        },
        date: new Date(),
      },
    ]);
  }

  function onSend(text: string) {
    setMessages([
      ...messages,
      {
        _id: v4(),
        text,
        user: CurrentUser,
        date: new Date(),
      },
    ]);
  }

  return (
    <Chat
      messages={messages}
      user={CurrentUser}
      onSend={(text) => onSend(text)}
    />
  );
}

const CurrentUser = {
  _id: '26',
  name: 'Andrew Robertson',
  username: 'RobboSZN',
  avatar:
    'https://tmssl.akamaized.net/images/portrait/originals/234803-1559827085.jpg',
};
```

## Interfaces

### Message

```ts
export interface Message {
  _id: string;
  text: string;
  user: User;
  date: Date;
  data?: any;
}
```

### User

```ts
export interface User {
  _id: string;
  name?: string;
  username?: string;
  avatar?: string;
}
```

## Props

- **messages** (Message[]) - the array of messages to display, **required**
- **user** (User) - the current user, **required**
- **onSend** (Function) - the function that runs when the user presses the send button, **required**
- **inputPlaceholder** (string) - the placeholder of the input, defaults to `"Type a message..."`
- **dateFormat** (string) - the format of the date in the message bubble, defaults to `"hh:mm"` (check [date-fns docs](https://date-fns.org/v2.16.1/docs/format) to see valid formats)

## Developer

![Twitter Follow](https://img.shields.io/twitter/follow/realKfiros)  
Feel free to DM me on Twitter.

## License

```
Copyright (c) 2020 Kfir Nevo
```

This project is licensed under the terms of the MIT license. See the [MIT](LICENSE) file.
