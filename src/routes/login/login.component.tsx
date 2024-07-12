import styles from './login.module.css';

import LoginBg from '../../assets/login-bg.jpg';
import Logo from '../../assets/logo.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

type InputFormType = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<InputFormType>();

  const onSubmit: SubmitHandler<InputFormType> = (data) => {
    console.log(data);
  };

  return (
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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Masukkan username"
            {...register('username', { required: true })}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
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
          <button type="submit" className={`${styles.btn} ${styles.signinBtn}`}>
            Masuk
          </button>
          <span>Atau</span>
          <button type="button" className={`${styles.btn} ${styles.googleBtn}`}>
            <span>
              <FcGoogle size="18px" />
            </span>
            Masuk dengan Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
