import { useForm } from 'react-hook-form';
import styles from './register.module.css';

import RegisterBg from '../../assets/register-bg.jpg';
import Logo from '../../assets/logo.svg';
import { Link, Navigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useUserStore from '../../stores/user.store';

type RegisterFormType = {
  email: string;
  password: string;
  cfmPassword: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterFormType>();

  const currentUser = useUserStore((state) => state.currentUser);

  return (
    <>
      {currentUser && <Navigate to={'/'} />}
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${RegisterBg})`,
          backgroundPosition: 'center',
        }}
      >
        <form onSubmit={handleSubmit(() => {})} className={styles.loginForm}>
          <img src={Logo} alt="brand-logo" />
          <div className={styles.title}>
            <h4>Daftar</h4>
            <p>Selamat datang!</p>
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
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="cfmPassword">Konfirmasi kata sandi</label>
            <input
              type="password"
              id="cfmPassword"
              placeholder="Masukkan kata sandi"
              {...register('cfmPassword', { required: true })}
            />
            <div className={styles.forgotPassword}>
              <p>
                Sudah punya akun?{' '}
                <Link to="/login">
                  <span>Masuk</span>
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.formAction}>
            <button
              type="submit"
              className={`${styles.btn} ${styles.signinBtn}`}
            >
              Daftar
            </button>
            <span>Atau</span>
            <button
              type="button"
              className={`${styles.btn} ${styles.googleBtn}`}
            >
              <span>
                <FcGoogle size="18px" />
              </span>
              Daftar dengan Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
