import React from 'react'
import { View } from 'react-native'
import {Button} from 'react-native-paper'

const MyButton = ({text, action, mode, size}) => {

    let style = null
    
    switch(size){
        case 'small':
            style = {...btnStyle.buttonSmall}
            break;
        case 'medium':
            style = {...btnStyle.buttonMedium}
            break;
        case 'large':
            style = {...btnStyle.buttonLarge}
            break;
        default:
            style = btnStyle.buttonMedium
            break;
    }

  return (
    <Button contentStyle={style} mode={mode} onPress={() => action()}>
        {text}
    </Button>
  )
}

export default MyButton

const btnStyle = {
    buttonSmall: {
        height: 60,
    },
    buttonMedium: {
        height: 70,
    },
    buttonLarge: {
        height: 80,
    }
}