import { useState } from "react";

//---------JSX và Component trong React------------
export function Headers(){
  return(
    <div>
      <header className="header">
        <h1>Đây là Header</h1>
      </header>
    </div>
  )
}

export function Footers(){
    return(
    <div>
      <footer className="footer">
        <h1>Đây là Footer</h1>
      </footer>
    </div>
  )
}

export function Showinfo(props){
  return(
    <section className="banner">
      <div>
        <h1>Thông tin Banner {props.name}</h1>
      </div>
    </section>
  )
}
//---------Tạo một component Our Reputation nhận dữ liệu task qua props và hiển thị thông tin task.------------
export const data =[
  {
    id:0,
    icon: <img src="" alt="" />,
    title: "Best Services",
    content: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
  },
  {
    id:1,
    icon: <img src="" alt="" />,
    title: "Best Teams",
    content: "Cursus semper tellus volutpat aliquet lacus. ",
  },
  {
    id:2,
    icon: <img src="" alt="" />,
    title: "Best Designs",
    content: "Ultricies at ipsum nunc, tristique nam lectus.",
  }
];

export function OurReputation(props){
  const items = props.data;
  return(
    <div className="reputation-wrapper">
      {items.map((item) => (
        <div key={item.id} className="reputation-item">
          <div className="icon">{item.icon}</div>
          <h3 className="title">{item.title}</h3>
          <p className="content">{item.content}</p>
        </div>
      ))}
    </div>
  )
}
//----------Tạo một component Form để nhập thông tin-----
export function Input({label , type}){
  return(
      <form action="">
        <label >{label}</label>
        <input type={type} />
      </form>
  )
}

export function Form(){
  return(
    <div className="form-info">
      <Input
        label ="Họ và tên"
        type ="text"
      />
      <Input
        label ="Số điện thoại"
        type ="number"
      />  
      <Input
        label= "Email"
        type="email"
      />
      <Input
        type="submit"
      />
    </div>
  )
}


export function CountClick(){
  const [count, setCount] = useState(0);
  return(
      <div className="countclick">
        <button onClick={() =>setCount(count +1)}>Click</button>
        <h1>Số lần Click:{count}</h1>
      </div>
  )
}

export function LoopClick({count}){
  const items =0;
  for(let i =0; i< count; i++) {
       items.push(i);
  }
  return <div>{items}</div>;
}
