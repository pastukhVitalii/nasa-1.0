import React, {FormEvent, useCallback} from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';
import '@material/react-text-field/index.scss';

type PropsType = {
  value: string
  onSetSol: (value: string) => void
}

export const MyInput = React.memo((props: PropsType) => {

  let isValid;
  isValid = !isNaN(+props.value);

  const onChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    props.onSetSol(e.currentTarget.value);
  }, [props.value, props.onSetSol]);

  return (
    <div>
      <TextField
        label='Sol'
        helperText={<div><HelperText>Only numbers!</HelperText></div>}
      ><Input
        isValid={isValid}
        value={props.value}
        onChange={onChange}/>
      </TextField>
    </div>
  );
})