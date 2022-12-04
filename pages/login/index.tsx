import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Button from '../../components/UI/Button/Button';
import Form from '../../components/Form/Form';

// @ts-ignore
import logo from '../../public/logo.png';

import s from './Login.module.scss';

const Login: NextPage = () => {
   const route = useRouter();
   const onSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>): void => {
      e.preventDefault();
      // @ts-ignore
      if (e.target[0].value && e.target[1].value) {
         route.push('/profile');
      }
   };
   return (
      <div className={s.login}>
         <div className={s.loginHello}>
            <div className={s.loginHello__Text}>
               <div>Добро пожаловать в нашу социальную сеть, анимечник!</div>
               <div className={s.loginHello__TextLittle}>
                  <div>
                     В этой социальной сети вы можете найти себе друзей и просто знакомых, с которыми можно пообщаться о
                     ваших любимых аниме произведениях, персонажах и героях.
                  </div>
                  <div>
                     Эта социальная сеть похожа на многие другие, в ней можно настроить свои профиль, отправлять
                     сообщения и добавлять в друзья других людей. Однако некоторый функционал можно увидеть только
                     здесь.
                  </div>
                  <div className={s.loginHello__TextLittle_Image}>
                     <Image className={s.image} src={logo} width={'400px'} height={'250px'} />
                  </div>
               </div>
            </div>
         </div>
         <div className={s.loginContent}>
            <div className={s.loginContent__Form}>
               <Form onSubmitHandler={onSubmitHandler} header={'Авторизация'} buttonValue={'Войти'} page={'login'} />
            </div>
            <div className={s.loginContent__Registration}>
               <div className={s.loginContent__RegistrationText}>Ещё не зарегестрированы?</div>
               <Link href={'/registration'}>
                  <div className={s.loginContent__RegistrationButton}>
                     <Button value={'Зарегистрироваться'} />
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Login;
