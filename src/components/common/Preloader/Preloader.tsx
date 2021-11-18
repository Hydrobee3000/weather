import preloader from '../../../assets/preloader.gif'

let Preloader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '20%',
        marginLeft: '-1.95em',
        width: '100px',
        height: '100px',
        zIndex: '999',
      }}>
      <img src={preloader} alt='preloader' />
    </div>
  )
}

export default Preloader
