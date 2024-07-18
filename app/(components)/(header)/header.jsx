import styles from './header.module.css';
import Image from 'next/image';

const Header = () => {
  // Placeholder for admin details
  const adminDetails = {
    name: 'Prasanna PushpaKumara',
    profilePic: '/images/Prasanna.jpg', // Corrected path to use public folder correctly
    role: 'Admin',
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <h1>4<span>paws</span></h1>
        </div>
        <input type="text" placeholder="Search..." className={styles.searchBar} />
      </div>
      <div className={styles.right}>
        <div className={styles.name}>
          <h3>{adminDetails.name}</h3>
          <p>{adminDetails.role}</p>
        </div>
        <Image
          src={adminDetails.profilePic}
          width={40}
          height={40}
          alt="Profile picture"
          className={styles.profilePic}
        />
      </div>
    </header>
  );
};

export default Header;
