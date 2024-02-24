import React from 'react'

interface IProps {
  //required => ? optional
  name?: string,
  age?: number,
  address?: string,
}

function ComponentProps(props: IProps) {
  const {name = 'truong1', age, address} = props

  return (
    <div>
      Hello props: name - {name} - age - {age} - address - {address}
    </div>
  )
}

export default ComponentProps
