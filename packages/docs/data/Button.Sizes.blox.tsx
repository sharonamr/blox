import { Button } from 'blox-example-components'

export default () => {
  return (
    <div>
      <div className='m-2'>
        <Button onClick={console.log}>
          default
        </Button>
      </div>
      <div className='m-2'>
        <Button onClick={console.log} size={400}>
          large
        </Button>
      </div>
      <div className='m-2'>
        <Button onClick={console.log} size={100}>
          small
        </Button>
      </div>
    </div>
  );
}