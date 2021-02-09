import React, {useCallback} from 'react';
import Button from '@material/react-button';
import '@material/react-button/index.scss';

type PropsType = {
  label: string
  disabled?: boolean
  value: number
  onSetPage: (value: number) => void
}

export const MyButton = React.memo((props: PropsType) => {

  const onClick = useCallback(() => {
    props.onSetPage(props.value)
  }, [props.value, props.onSetPage])

  return (
    <Button raised disabled={props.disabled} onClick={onClick}>
      {props.label}
    </Button>
  );
})