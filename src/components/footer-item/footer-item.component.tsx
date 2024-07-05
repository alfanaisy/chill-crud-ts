import styles from './footer-item.module.css';

interface Props {
  title: string;
  items: string[];
}

const FooterItem = ({ title, items }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.itemContainer}>
        {items.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default FooterItem;
