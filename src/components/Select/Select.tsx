import React, {useCallback} from 'react';
import '@material/react-list/index.scss';
import '@material/react-menu-surface/index.scss';
import '@material/react-menu/index.scss';
import '@material/react-select/index.scss';
import Select, {Option} from '@material/react-select';

type PropsType = {
  value: string
  onSetValue: (value: string) => void
  options: Array<string>
}

export const MySelect = React.memo((props: PropsType) => {

    const onEnhancedChange = useCallback((index: any, item: any) => {
      props.onSetValue(item.getAttribute('data-value')
      )}, [props.value, props.onSetValue])

    return (
      <div>
        <Select
          enhanced
          label='Choose rover'
          value={props.value}
          onEnhancedChange={onEnhancedChange}
        >
          {props.options.map((option, item) => {
            return <Option key={item} value={option}>{option}</Option>
          })}
        </Select>
      </div>
    );
  }
)