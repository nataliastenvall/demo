import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

function Math(){
  let x=5;
  let y=10;

  return(x+y);
}

let person = (
  <div className="myclass">
  <h1>Hello world!</h1>
  <p>Enjoy my first React app.
  It is another line of the content</p>
  </div>
);

function Person(props){
  return(
    <div className="girls">
    <h1>{props.name}</h1>
    <p>Hobby: {props.hobby}</p>
    <p>Height: {props.height}</p>
    </div>);
}

var data = (
  <div>
<Person name="Benita" hobby="music" height="165"/>
<Person name="Ksenia" hobby="software" height="168"/>
<Person name="Valentina" hobby="cooking" height="170"/>
  </div>
);

ReactDOM.render(<Math />, document.getElementById('math'));
ReactDOM.render(person, document.getElementById('root'));
ReactDOM.render(data, document.querySelector('#data'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
