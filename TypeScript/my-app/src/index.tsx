import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ReputationItem } from './App';
import { data } from './App';
import { OurReputation } from './App';   
import { Form } from './App';
import { Count } from './App';
import { CountItems } from './App';
import { User } from './App';
import { List } from './App';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <OurReputation data={data} />
  </React.StrictMode>
); 

const form = ReactDOM.createRoot(
  document.getElementById('form') as HTMLElement
);
form.render(
  <React.StrictMode>
    {<Form /> }
  </React.StrictMode>
);
 const count = ReactDOM.createRoot(document.getElementById("count") as HTMLElement )
 count.render(
    <div>
    {<Count /> }
    </div>
 )

 const user = ReactDOM.createRoot(document.getElementById("user") as HTMLElement)
 user.render(
    <div>
      {<User /> }
    </div>
 )

 const list = ReactDOM.createRoot(document.getElementById("list") as HTMLElement)
  list.render(
    <div>
      <List<string>
      items={["Apple", "Banana", "Orange"]}
      renderItem={(item) => <span>{item}</span>}
      />
    </div>
 )