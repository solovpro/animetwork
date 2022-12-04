import React from 'react';
import { inject, observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../components/UI/Button/Button';
import Form from '../components/Form/Form';

// @ts-ignore
import logo from '../public/logo.png';

import s from '../styles/Home.module.scss';

interface HomeProps {
   store?: any;
}

const Home: NextPage<HomeProps> = inject('store')(
   observer(({ store }) => {
      const route = useRouter();
      const onSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>): void => {
         e.preventDefault();
         // @ts-ignore
         if (e.target[0].value && e.target[1].value) {
            route.push('/profile');
            store.setAuthorized(true);
         }
      };
      return (
         <div className={s.home}>
            <div className={s.homeHello}>
               <div className={s.homeHello__Text}>
                  <div>Добро пожаловать в нашу социальную сеть, анимечник!</div>
                  <div className={s.homeHello__TextLittle}>
                     <div>
                        В этой социальной сети вы можете найти себе друзей и просто знакомых, с которыми можно
                        пообщаться о ваших любимых аниме произведениях, персонажах и героях.
                     </div>
                     <div>
                        Эта социальная сеть похожа на многие другие, в ней можно настроить свои профиль, отправлять
                        сообщения и добавлять в друзья других людей. Однако некоторый функционал можно увидеть только
                        здесь.
                     </div>
                     <div className={s.homeHello__TextLittle_Image}>
                        <Image className={s.image} src={logo} width={'400px'} height={'250px'} />
                     </div>
                  </div>
               </div>
            </div>
            <div className={s.homeContent}>
               <div className={s.homeContent__Form}>
                  <Form onSubmitHandler={onSubmitHandler} header={'Авторизация'} buttonValue={'Войти'} page={'login'} />
               </div>
               <div className={s.homeContent__Registration}>
                  <div className={s.homeContent__RegistrationText}>Ещё не зарегестрированы?</div>
                  <Link href={'/registration'}>
                     <div className={s.homeContent__RegistrationButton}>
                        <Button value={'Зарегистрироваться'} />
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      );
   })
);

export default Home;
