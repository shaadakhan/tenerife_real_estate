import styles from '../styles/Layout.module.css';
import Nav from './Nav';

export default function Layout({children}) {
  return (
    <>
    <Nav />
      <div className={styles.app}>
       {children}
      </div>
    </>
  );
}
