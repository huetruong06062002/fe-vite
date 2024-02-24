import React from 'react'

interface IProps {
  name: string,
  age: number,
  address: string,
}

function ComponentProps(props: IProps) {
  const {name, age, address} = props

  return (
    <div>
      Hello props: name - {name} - age - {age} - address - {address}
    </div>
  )
}

export default ComponentProps
