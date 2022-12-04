import React from 'react';

import s from './Button.module.scss';

type Props = {
   value: string;
};

const Button: React.FC<Props> = ({ value }) => {
   return <button className={s.button}>{value}</button>;
};

export default Button;
