
import SyncLoader from 'react-spinners/SyncLoader'
const override={
  display:'block',
  margin: '100px auto '
}
const Spinner = ({loading}) => {
  return (
    <SyncLoader 
    color='#4338ca'
    loading={loading}
    cssOverride={override} 
    size={15}
    />
  )
}

export default Spinner