import React from 'react';
import { inject, observer } from 'mobx-react';
import Image from 'next/image';
import Link from 'next/link';

// @ts-ignore
import logo from '../../public/logo.png';
// @ts-ignore
import ava from '../../public/ava.png';
// @ts-ignore
import exit from '../../public/exit-header.png';

import s from './Header.module.scss';

interface HeaderProps {
   store?: any;
}

const Header: React.FC<HeaderProps> = inject('store')(
   observer(({ store }) => {
      const logout = (): void => {
         store.setAuthorized(false);
      };
      return (
         <div className={s.header}>
            <Link href={'/profile'}>
               <div className={s.headerName}>
                  <div className={s.headerName__Logo}>
                     <Image className={s.headerName__LogoImg} src={logo} width={'70px'} height={'50px'} />
                  </div>
                  <div className={s.headerName__Text}>Animetwork</div>
               </div>
            </Link>
            <div className={s.headerProfile}>
               <div className={s.headerProfile__Ava}>
                  <Image className={s.headerProfile__AvaImg} src={ava} width={'100%'} height={'100%'} />
               </div>
               <Link href={'/'} onClick={logout}>
                  <div className={s.headerProfile__Exit}>
                     <Image src={exit} width='20px' height='20px' />
                  </div>
               </Link>
            </div>
         </div>
      );
   })
);

export default Header;
