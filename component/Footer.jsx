import styles from '../styles/footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container }>
        <span>&#169; {currentYear} Sujith Rajan | All Right Reserved</span>
        </div>
  )
}

export default Footer