import styles from './SignInForm.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    console.log(result);

    router.replace('/');
  };

  return (
    <section className={styles.signin_form}>
      <form
        onSubmit={onSubmitHandler}
        className={`glassmorphism ${styles.form}`}
      >
        <div className={styles.logo_container}>
          <Image
            className={styles.logo_image}
            src="/images/wolfpad.png"
            alt="wolf"
            width={65}
            height={65}
          />
          <h3>Sign In</h3>
        </div>
        <div className={styles.form_row}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.form_row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles.submit_btn} type="submit">
          Sign In
        </button>

        <div className={styles.register}>
          <p>Not a member yet?</p>
          <Link className={styles.register_btn} href="signup">
            Register
          </Link>
        </div>
      </form>
    </section>
  );
};
export default SignInForm;
