import { Button } from 'blox-example-components';
import { useState } from 'react';

export default () => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button onClick={() => setCounter((prev) => prev + 1)}>
        Increase counter!
      </Button>
      <div style={{ marginTop: '0.5rem' }}>counter: {counter}</div>
    </div>
  );
};
