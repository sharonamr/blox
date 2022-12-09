import { Button } from 'blox-example-components';

export default () => {
  return (
    <div>
      <div style={{ margin: '0.5rem' }}>
        <Button onClick={console.log}>default</Button>
      </div>
      <div style={{ margin: '0.5rem' }}>
        <Button onClick={console.log} size={400}>
          large
        </Button>
      </div>
      <div style={{ margin: '0.5rem' }}>
        <Button onClick={console.log} size={100}>
          small
        </Button>
      </div>
    </div>
  );
};
