import React from 'react';
import { Chat } from './lib/chat';
import mockMessages from './lib/mocks/messages.json';
import mockUser from './lib/mocks/user.json';

function App() {

  return (
    <div
      style={{
        width: 500,
        height: 500
      }}>
      <Chat
        messages={mockMessages.map(message => ({...message, date: new Date()}))}
        user={mockUser}
        onSend={() => {}}/>
    </div>
  );
}

export default App;
