import styles from './login.module.css';

import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate } from 'react-router-dom';
import LoginBg from '../../assets/login-bg.jpg';
import Logo from '../../assets/logo.svg';
import useUserStore from '../../stores/user.store';
import { signInWithCreds } from '../../utils/firebase/firebase-config';

type InputFormType = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<InputFormType>();

  const { signIn, currentUser } = useUserStore();

  const onSubmit: SubmitHandler<InputFormType> = async (data) => {
    const { email, password } = data;
    const { user } = await signInWithCreds(email, password);
    signIn(user);
  };

  return (
    <>
      {currentUser && <Navigate to={'/'} />}
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${LoginBg})`,
          backgroundPosition: 'center',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
          <img src={Logo} alt="brand-logo" />
          <div className={styles.title}>
            <h4>Masuk</h4>
            <p>Selamat datang kembali!</p>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan email"
              {...register('email', { required: true })}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Kata sandi</label>
            <input
              type="password"
              id="password"
              placeholder="Masukkan kata sandi"
              {...register('password', { required: true })}
            />
            <div className={styles.forgotPassword}>
              <p>
                Belum punya akun?{' '}
                <Link to="/register">
                  <span>Daftar</span>
                </Link>
              </p>
              <p>
                <Link to={'/'}>
                  <span>Lupa kata sandi?</span>
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.formAction}>
            <button
              type="submit"
              className={`${styles.btn} ${styles.signinBtn}`}
            >
              Masuk
            </button>
            <span>Atau</span>
            <button
              type="button"
              className={`${styles.btn} ${styles.googleBtn}`}
            >
              <span>
                <FcGoogle size="18px" />
              </span>
              Masuk dengan Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
