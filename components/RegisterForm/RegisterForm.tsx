import styles from './RegisterForm.module.css';
import { useState } from 'react';

const RegisterForm = () => {
  const [formInputs, setFormInputs] = useState({
    name: '',
    email: '',
    password: '',
    checked: false,
  });

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // reseting inputs
    setFormInputs({ name: '', email: '', password: '', checked: false });
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        required
        value={formInputs.name}
        onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        required
        value={formInputs.email}
        autoComplete="username"
        onChange={(e) =>
          setFormInputs({ ...formInputs, email: e.target.value })
        }
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formInputs.password}
        onChange={(e) =>
          setFormInputs({ ...formInputs, password: e.target.value })
        }
        required
        autoComplete="current-password"
      />
      <div className={styles.form_newsletter}>
        <input
          type="checkbox"
          id="checkbox"
          name="newsletter"
          checked={formInputs.checked}
          onChange={(e) =>
            setFormInputs({ ...formInputs, checked: e.target.checked })
          }
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
