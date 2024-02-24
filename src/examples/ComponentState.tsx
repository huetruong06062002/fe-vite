import React, { useState } from 'react'

function ComponentState() {
  const [state, setState] = useState<string | number>(10);  
  return (
    <div>
      Hello state: {state}
    </div>
  )
}

export default ComponentState
