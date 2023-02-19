import styles from './Register.module.css';
import RegisterForm from '../RegisterForm/RegisterForm';
import RegisterContent from '../RegisterContent/RegisterContent';

const Register = () => {
  return (
    <section className={styles.register}>
      <RegisterForm />
      <RegisterContent />
    </section>
  );
};
export default Register;
