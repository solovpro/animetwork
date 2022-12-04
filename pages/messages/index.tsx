import React from 'react';
import { NextPage } from 'next';

import s from './Messages.module.scss';

const Messages: NextPage = () => {
   return <div className={s.messages}>messages</div>;
};

export default Messages;
