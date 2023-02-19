import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  return (
    <form className={styles.form}>
      <input type="text" name="name" placeholder="Enter name" required />
      <input type="email" name="email" placeholder="Enter email" required />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        required
      />
      <label htmlFor="checkbox">
        I want to recive latest news and offers about Wolfpad
      </label>
      <input type="checkbox" id="checkbox" name="newsletter" />
      <button type="submit">Register Account</button>
    </form>
  );
};
export default RegisterForm;
