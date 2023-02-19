import styles from './Register.module.css';
import RegisterForm from '../RegisterForm/RegisterForm';
import RegisterContent from '../RegisterContent/RegisterContent';
import { useState } from 'react';

export interface FormInputs {
  name: string;
  email: string;
  password: string;
  checked: boolean;
}

const Register = () => {
  const [formInputs, setFormInputs] = useState<FormInputs>({
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
    <section className={styles.register}>
      <RegisterForm
        onSubmitHandler={onSubmitHandler}
        formInputs={formInputs}
        setFormInputs={setFormInputs}
      />
      <RegisterContent />
    </section>
  );
};
export default Register;
