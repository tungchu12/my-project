import { link } from "fs/promises";
import { Agent } from "http";
import { stringify } from "querystring";
import React, { ChangeEvent, useEffect, useState } from "react";
//---------Tạo một component Our Reputation nhận dữ liệu task qua props và hiển thị thông tin task.------------
export interface ReputationItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: string;
}

export const data: ReputationItem[] = [
  {
    id: 0,
    icon: <img src="" alt="" />,
    title: "Best Services",
    content: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
  },
  {
    id: 1,
    icon: <img src="" alt="" />,
    title: "Best Teams",
    content: "Cursus semper tellus volutpat aliquet lacus.",
  },
  {
    id: 2,
    icon: <img src="" alt="" />,
    title: "Best Designs",
    content: "Ultricies at ipsum nunc, tristique nam lectus.",
  },
];


interface OurReputationProps {
  data: ReputationItem[];
}

export function OurReputation({ data }: OurReputationProps) {
  return (
    <div className="reputation-wrapper">
      {data.map((item) => (
        <div key={item.id} className="reputation-item">
          <div className="icon">{item.icon}</div>
          <h3 className="title">{item.title}</h3>
          <p className="content">{item.content}</p>
        </div>
      ))}
    </div>
  );
}
//----------Tạo một component Form để nhập thông tin-----------
interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export function Input({label , type , value , onChange }: InputProps){
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
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
export function ToDoList() {
  const [input, setInput] = useState<string>("");
  const [task, setTask] = useState<string[]>([]);

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (input.trim() === "") return;
    setTask([...task, input]);
    setInput("");
  };

 const handleDelete = (
  e: React.MouseEvent<HTMLButtonElement>,
  index: number
): void => {
  e.preventDefault();
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
            <button onClick={(e) => handleDelete(e,index)}>X</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
//--------------------
export interface CountItems{
    count : number;
}

export function Count(){
    const [count, setCount] =useState(0)
    const [running ,setRunning] =useState(false)
    useEffect(() => {
        if (!running) return; 

        const timer = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [running]);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => setRunning(true)}>Bắt đầu</button>
            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => setRunning(false)}>Dừng</button>
            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {setCount(0);setRunning(false)}}>Reset</button>
        </div>
    )
}

//-------------------------------
interface Userdata {
  id: number;
  name: string;
  age: number | null;
  address: string;
}


export function User(){
  const [nextId, setNextId] = useState(1);
  const [list, setList] = useState<Userdata[]>([]);
  const [data, setData] = useState<Userdata>({
    id: nextId,
    name: "",
    age: null,
    address: ""
  });
   const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (data.name.trim() === "") return;

    setList([...list, data]);
    setNextId(nextId + 1);
    setData({
      id: nextId,
      name: "",
      age: null,
      address: ""
    });
    
  };
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>,id: number ) :void => {
    e.preventDefault();
    setList(list.filter((item) => item.id !== id));
  };
  return(
    <div>
      <Input 
        label="Tên sinh viên"
        type="text"
        value={data.name}
        onChange={(e) =>
        setData({ ...data, name: e.target.value })
        }
      />
      <Input 
        label="Tuổi"
        type="number"
        value={String(data.age)}
        onChange={(e) =>
        setData({ ...data, age: Number(e.target.value) })
        }
      />
      <Input 
        label ="Địa chỉ"
        type="text"
        value={data.address}
        onChange={(e) =>
        setData({ ...data, address: e.target.value })}
      />
      <button onClick={handleAdd}>Nhập</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            Tên: {item.name} - Tuổi:{item.age} - Địa chỉ:{item.address}
            <button onClick={(e) => handleDelete(e,item.id)}>
              Xóa
            </button>

          </li>
        ))}
      </ul>
    </div>
    
  )
}
//--------------------------------------
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

 export function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

