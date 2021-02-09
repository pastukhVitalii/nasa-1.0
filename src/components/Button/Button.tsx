import React from 'react';
import Button from '@material/react-button';
import '@material/react-button/index.scss';

type PropsType = {
  label: string
  disabled?: boolean
  value: number
  onSetPage: (value: number) => void
}

export const MyButton = React.memo((props: PropsType) => {

  const handleChange = (event: any) => {
    props.onSetPage(props.value)
  }

  return (
    <Button raised disabled={props.disabled} onClick={handleChange} >
      {props.label}
    </Button>
  );
})