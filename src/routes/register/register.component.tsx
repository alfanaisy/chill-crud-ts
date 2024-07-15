import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './register.module.css';

import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import RegisterBg from '../../assets/register-bg.jpg';
import useAuthStore from '../../stores/auth.store';

type RegisterFormType = {
  email: string;
  password: string;
  cfmPassword: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterFormType>();

  const signUp = useAuthStore((state) => state.signUp);

  const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
    const { email, password, cfmPassword } = data;
    if (password !== cfmPassword) return;
    await signUp(email, password);
  };

  // const signupWithGoogle = async () => {
  //   const res = await signInGooglePopup();
  //   signIn(res.user);
  // };

  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${RegisterBg})`,
          backgroundPosition: 'center',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
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
              // onClick={signupWithGoogle}
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
