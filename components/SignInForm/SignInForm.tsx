import styles from './SignInForm.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Logo from '../Logo/Logo';
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
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <div className={styles.logo_container}>
          <Image
            className={styles.logo_image}
            src="/images/wolfpad.png"
            alt="wolf"
            width={65}
            height={65}
          />
          <Logo title=".wolfpad" className={styles.logo} />
        </div>
        <h3>Sign In</h3>
        <div className={styles.form_row}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
        </div>
        <button type="submit">Sign In</button>

        <p className={styles.register}>Not a member yet?</p>
        <Link href="signup">Register</Link>
      </form>
    </section>
  );
};
export default SignInForm;
