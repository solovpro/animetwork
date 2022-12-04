import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

// @ts-ignore
import profile from '../../public/profile-navbar.png';
// @ts-ignore
import messages from '../../public/messages-navbar.png';
// @ts-ignore
import friends from '../../public/friends-navbar.png';
// @ts-ignore
import music from '../../public/music-navbar.png';
// @ts-ignore
import news from '../../public/news-navbar.png';
// @ts-ignore
import exit from '../../public/exit-header.png';

import s from './Navbar.module.scss';

const Navbar: React.FC = () => {
   return (
      <div className={s.navbar}>
         <Link href={'/profile'}>
            <div className={cn(s.navbarProfile, s.navbarBlock)}>
               <Image src={profile} width='15px' height='15px' />
               <div>Profile</div>
            </div>
         </Link>
         <Link href={'/messages'}>
            <div className={cn(s.navbarMessages, s.navbarBlock)}>
               <Image src={messages} width='15px' height='15px' />
               <div>Messages</div>
            </div>
         </Link>
         <Link href={'/friends'}>
            <div className={cn(s.navbarFriends, s.navbarBlock)}>
               <Image src={friends} width='15px' height='15px' />
               <div>Friends</div>
            </div>
         </Link>
         <Link href={'/news'}>
            <div className={cn(s.navbarNews, s.navbarBlock)}>
               <Image src={news} width='15px' height='15px' />
               <div>News</div>
            </div>
         </Link>
         <Link href={'/music'}>
            <div className={cn(s.navbarMusic, s.navbarBlock)}>
               <Image src={music} width='15px' height='15px' />
               <div>Music</div>
            </div>
         </Link>
      </div>
   );
};

export default Navbar;
