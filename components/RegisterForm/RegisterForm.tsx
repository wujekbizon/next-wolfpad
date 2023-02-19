import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {};

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input type="text" name="name" placeholder="Enter name" required />
      <input type="email" name="email" placeholder="Enter email" required />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        required
      />
      <div className={styles.form_newsletter}>
        <input type="checkbox" id="checkbox" name="newsletter" />
        <label htmlFor="checkbox">
          I want to recive latest news and offers about Wolfpad
        </label>
      </div>
      <button type="submit" className={styles.submit_btn}>
        Register Account
      </button>
    </form>
  );
};
export default RegisterForm;
