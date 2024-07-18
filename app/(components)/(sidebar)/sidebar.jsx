// app/(components)/(sidebar)/sidebar.jsx
import Link from "next/link";
import styles from "./sidebar.module.css";
import { BiSolidCalendar, BiSolidCart, BiSolidDashboard, BiSolidDog,  BiSolidPackage } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>
        <h3>Genaral</h3>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
           <BiSolidDashboard/> Dashboard
          </Link>
          {/* <div className={styles.subLinks}>
            <Link href="animals" className={styles.subLink}>
              Sub Link1
            </Link>
            <Link href="#" className={styles.subLink}>
              Sub Link2
            </Link>
          </div> */}
          <Link href="/animals" className={styles.link}>
           <BiSolidDog/> Animals
          </Link>
        </div>
      </div>

      <div className={styles.title}>
        <h3>Analytics</h3>
        <div className={styles.links}>
          <Link href="/apoinments" className={styles.link}>
           <BiSolidCalendar/> Apoinments
          </Link>
          <Link href="/reports" className={styles.link}>
          <BiSolidPackage/> Medical Reports
          </Link>
          <Link href="/shop" className={styles.link}>
           <BiSolidCart/> Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
