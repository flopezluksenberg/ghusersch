import styles from './SearchBox.module.css';
import SearchIcon from '../Icon/SearchIcon';
import CloseIcon from '../Icon/CloseIcon';

export default function SearchBox({ onChange, onClear, value, placeholder }) {
  return (
    <div className={styles.container}>
      <SearchIcon className={styles.icon} />
      <input
        className={styles.input}
        type={'text'}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {!!value && <CloseIcon className={styles.clear} onClick={onClear} />}
    </div>
  );
}
