import React from 'react';

import Header from './ui-elements/Header';
import { UserCardList } from "./UserCardList";

function App() {
  return (
    <div className="container">
      <Header/>
      <UserCardList />     
    </div>
    
  );
}

export default App;
