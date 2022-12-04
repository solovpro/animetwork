import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import s from './Form.module.scss';

interface Props {
   onSubmitHandler: (e: React.ChangeEvent<HTMLFormElement>) => void;
   header: string;
   buttonValue: string;
   page?: string;
}

const Form: React.FC<Props> = ({ onSubmitHandler, header, buttonValue, page }) => {
   return (
      <div className={s.form}>
         <div className={s.formHeader}>{header}</div>
         <form className={s.formContent} onSubmit={onSubmitHandler}>
            <Input type={'text'} />
            <Input type={'password'} />
            <Button value={buttonValue} />
         </form>
      </div>
   );
};

export default Form;
