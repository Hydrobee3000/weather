import preloader from '../../../assets/preloader.svg'

const style = {
  position: 'absolute',
  left: '50%',
  top: '20%',
  marginLeft: '-77px',
  width: '100px',
  height: '100px',
  zIndex: '999',
}
let Preloader = () => {
  return (
    <div style={style}>
      <img src={preloader} alt='preloader' />
    </div>
  )
}

export default Preloader
