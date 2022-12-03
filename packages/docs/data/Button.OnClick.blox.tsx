import { Button } from 'blox-example-components'
import { useState } from 'react'

export default () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className='flex flex-col'>
      <Button onClick={() => setCounter(prev => prev + 1)}>
        Increase counter!
      </Button>
      <div className='mt-2'>counter: {counter}</div>
    </div>
  );
}