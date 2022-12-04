import React, { useState } from 'react';

import s from './Input.module.scss';

interface Props {
   type: string;
}

const Input: React.FC<Props> = ({ ...props }) => {
   const [value, setValue] = useState<string>('');
   return (
      <input
         onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setValue(e.target.value)}
         className={s.input}
         value={value}
         {...props}
      />
   );
};

export default Input;
