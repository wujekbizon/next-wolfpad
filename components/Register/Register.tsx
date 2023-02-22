import styles from './Register.module.css';
import RegisterForm from '../RegisterForm/RegisterForm';
import RegisterContent from '../RegisterContent/RegisterContent';
import { useState } from 'react';
import { User } from '../../state/user';
import { useActions } from '../../hooks/useActions';
import { toast } from 'react-toastify';

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
  const { registerNewUser } = useActions();

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { name, email, password, checked } = formInputs;

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
      toast.error('Please Fill Out All Fields');
      console.log('Invalid Inputs');
      return;
    }
    const newUser: User = { name, email, password, checked };
    try {
      registerNewUser(newUser);
      toast.success('User registered succesfully');
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
