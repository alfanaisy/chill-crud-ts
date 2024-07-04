import styles from './label.module.css';

const Label = ({ label }: { label: 'new episode' | 'premium' }) => {
  const color = label === 'premium' ? 'var(--warning)' : 'var(--primary)';

  return (
    <div className={styles.label} style={{ backgroundColor: color }}>
      {label}
    </div>
  );
};

export default Label;
