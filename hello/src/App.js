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
//----------Tạo một component Form để nhập thông tin-----------
export function Input({label , type , value , onChange }){
  return(
      <form action="" >
        <label >{label}</label>
        <input type={type} value={value} onChange={onChange} />
      </form>
  )
}

export function Form(){
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  const handleClick = () => {
    const data = {
      name,
      phone,
      email
    };
    console.log(data);
    alert("Đã gửi thông tin!");
  };
  return(
    <div className="form-info">
      <Input
        label ="Họ và tên"
        type ="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label ="Số điện thoại"
        type ="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />  
      <Input
        label= "Email"
        type = "Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleClick}>Gửi</button>
      
    </div>
  )
}

//-----Tạo một component đếm số lần click của người dùng và hiển thị kết quả.--------
export function CountClick(){
  const [count, setCount] = useState(0);
  return(
      <div className="countclick">
        <button onClick={() =>setCount(count +1)}>Click</button>
        <h1>Số lần Click:{count}</h1>
      </div>
  )
}
//----------------------------------------------
export function ToDoList(){
  const [input ,setInput] = useState("");
  const [task, setTask] =useState([]);
  const handleInput = () =>{
    if (input.trim() === "") return;          
    setTask([...task, input]);              
    setInput("");  
  }

  const handleDelete = (index) => {
    const filtered = task.filter((_, i) => i !== index);
    setTask(filtered);
  };
  

 return (
    <section>
      <Input
        label="Nhập vào công việc:"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleInput}>Nhập</button>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </section>
  );
}