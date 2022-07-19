import styles from './banner.module.css'
import banner from '../banner.jpeg'

function Banner() {
  return (
    <div className={styles.banner}>
      <img src={banner} alt=""/>
    </div>
  )
}

export default Banner;