import React, { useState } from "react";
import "./Excercise.css";

export interface ITest{
  name: string,
  age: number
}

interface IUser{
  name: string,
  age: number,
  city: string
}

interface IProps{
  name?: string,
  age?: number | string,
  city?: string
}

function ComponentExcercise(props: IProps) {
  const {name: defaultProps = 'truong', age : defaultName = 23} = props
  const [name, setName] = useState<string>(defaultProps);
  const [age, setAge] = useState<number | string>(defaultName);
  const [city, setCity] = useState<string[]>([
    "Hà Nội",
    "Đà Nẵng",
    "Hồ Chí Minh",
  ]);

  const [users, setUsers] = useState<IUser[]>([
    { name: "Eric", age: 25, city: "Hà Nội" },
    { name: "Eric1", age: 26, city: "Đà Nẵng" },
    { name: "Eric2", age: 27, city: "Hồ Chí Minh" },
  ]); 

  const [test, setState] = useState<ITest | null>(null)

  const [isShowBtn, setIsShowBtn] = useState<boolean>(false);
  return (
    <>
      <div className="form-user">
        <div>
          <label>Name:</label>
          <br />
          <input type="text" value={name} />
          <br />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input type="text" value={age} />
          <br />
        </div>
        <div>
          <label>City:</label>
          <br />
          <select>
            {city.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </div>

        <input type="submit" value="Submit" />
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
