import styles from './RegisterForm.module.css';
import { useState } from 'react';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(checked);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        required
        value={email}
        autoComplete="username"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="current-password"
      />
      <div className={styles.form_newsletter}>
        <input
          type="checkbox"
          id="checkbox"
          name="newsletter"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
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
