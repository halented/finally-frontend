import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", ()=>{


  it("has state", () => {
    const div = document.createElement('div');
    const app = ReactDOM.render(<App />, div)
    expect(app.state)
  })
  it("does things", ()=>{
    expect("yellow").toBe("yellow")
  })
})

describe("Main app", ()=>{
  const div = document.createElement('div');
  const main = ReactDOM.render(<App />, div).mainApp()
  
  it("exists", () => {
    expect(main)
  })
})