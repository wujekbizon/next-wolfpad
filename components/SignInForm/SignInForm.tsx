import styles from './SignInForm.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { useSession } from 'next-auth/react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    toast.success('Welcome back user!');
    router.push('/');
  };

  const onGoogleSignHandler = () => {};

  return (
    <section className={styles.signin_form}>
      <div className={`glassmorphism  ${styles.wrapper}`}>
        <form onSubmit={onSubmitHandler} className={styles.form}>
          <div className={styles.logo_container}>
            <Image
              className={styles.logo_image}
              src="/images/wolfpad.png"
              alt="wolf"
              width={65}
              height={65}
              priority
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
              autoComplete="username"
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
              autoComplete="current-password"
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
        <button className={styles.google_btn} onClick={() => signIn('google')}>
          <FcGoogle className={styles.icon} />
          Sign in with <span> Google</span>
        </button>
      </div>
    </section>
  );
};
export default SignInForm;
