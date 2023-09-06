import { RotatingLines } from  'react-loader-spinner'

const Spinner = () => {
  return (
    <div
    className='p-4'
    >
        <RotatingLines
            strokeColor="#408692"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
    </div>
  )
}

export default Spinner;