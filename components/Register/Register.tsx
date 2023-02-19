import styles from './Register.module.css';
import RegisterForm from '../RegisterForm/RegisterForm';
import RegisterContent from '../RegisterContent/RegisterContent';
import { useState } from 'react';
import axios from 'axios';

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
    const { name, email, password } = formInputs;

    // optional handling validation on client side
    if (
      !name ||
      name.trim() === '' ||
      !email ||
      !email.includes('@') ||
      email.trim() === '' ||
      !password ||
      password.trim().length < 8
    ) {
      // add later notification for the client
      console.log('Invalid Inputs');
      return;
    }

    try {
    } catch (error) {}

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
