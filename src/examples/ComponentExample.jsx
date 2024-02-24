import { useState } from 'react';

export const ComponentExample = (props) => {
  const {name} = props;
  const [age, setAge] = useState(0);
  useState(()=> {
    setAge('huetruong')
  }, [])

  return (
    <div>
      Example - My name's {name} | age = {age}
    </div>
  )

}