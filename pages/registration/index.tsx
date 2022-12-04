import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import Form from '../../components/Form/Form';

// @ts-ignore
import arrow from '../../public/arrow-back.png';

import s from './Registration.module.scss';

const Registration: NextPage = () => {
   const route = useRouter();
   const onSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>): void => {
      e.preventDefault();
      // @ts-ignore
      if (e.target[0].value && e.target[1].value) {
         route.push('/');
      }
   };
   return (
      <div className={s.registration}>
         <Form
            onSubmitHandler={onSubmitHandler}
            header={'Добавься в список анимечников'}
            buttonValue={'Добавиться'}
            page={'registration'}
         />
         <div className={s.registrationContainer}>
            <Link href={'/'}>
               <div>
                  <Image src={arrow} width={'35px'} height={'35px'} />
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Registration;
