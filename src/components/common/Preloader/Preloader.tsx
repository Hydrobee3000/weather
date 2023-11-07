import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import s from './Preloader.module.scss'

/**
 * Component that displays a preloader animation.
 *
 * @component
 * @returns {JSX.Element} JSX element containing the preloader animation.
 */

let Preloader: React.FC = () => {
  return (
    <div className={s.preloader__container}>
      <Spin className={s.preloader} indicator={<LoadingOutlined className={s.preloader__icon} spin />} />
    </div>
  )
}

export default Preloader
