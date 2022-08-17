import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {

  render() {
    return (
      <div>
        <HornedBeast description="beast one" imageUrl="https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" title="Harry Potter Dragon"/>
        <HornedBeast description="beast two" imageUrl="https://images.unsplash.com/photo-1550747528-cdb45925b3f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80" title="Lego Unikitty"/>
      </div>
    );
  }

}

export default Main;
