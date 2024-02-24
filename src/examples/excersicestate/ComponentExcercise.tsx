import React, { useState } from "react";
import "./Excercise.css";

export interface ITest{
  name: string,
  age: number
}

interface IUser{
  name: string,
  age: number | string,
  city: string
}

interface IProps{
  name?: string,
  age?: number | string,
  city?: string
}

function ComponentExcercise(props: IProps) {
  const {name: defaultProps = '', age : defaultName = ''} = props
  const [name, setName] = useState<string>(defaultProps);
  const [age, setAge] = useState<number | string>(defaultName);
  const [city, setCity] = useState<string[]>([
    "Hà Nội",
    "Đà Nẵng",
    "Hồ Chí Minh",
  ]);

  const [users, setUsers] = useState<IUser[]>([]); 

  const [selected, setSelected] = useState<string>('Hồ Chí Minh');

  const [test, setState] = useState<ITest | null>(null)

  const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const user = {
      name: name,
      age : age,
      city : selected
    }
    console.log(user);
    setUsers([...users, user])
    setName(''),
    setAge('')
  }

  const handleOnChangeName = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value);
  }

  return (
    <>
      <div className="form-user">
        <div>
          <label>Name:</label>
          <br />
          <input type="text" value={name} onChange={handleOnChangeName}/>
          <br />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          <br />
        </div>
        <div>
          <label>City:</label>
          <br />
          <select
          onChange={
            (e) => setSelected(e.target.value)
          }
          >
            {city.map((item) => {
              return <option key={item} value={item}>{item}</option>;
            })}
          </select>
        </div>

        <input type="submit" value="Submit" onClick={handleSubmit} />
      </div>
      <hr />
      <div>List Users:</div>
      <div className="table-user">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ComponentExcercise;
