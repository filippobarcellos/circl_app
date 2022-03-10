import React, { useState, useRef } from 'react'
import { Feather } from '@expo/vector-icons'
import {
  Easing,
  Platform,
  Animated,
  UIManager,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from 'react-native'

import * as S from './styles'
import { Text } from '@components/Text'

type AccordionProps = {
  children: React.ReactNode
  onExpand?: any
  title: string
}

export function Accordion({ children, onExpand, title }: AccordionProps) {
  const [expanded, setExpanded] = useState(false)
  const animatedController = useRef(new Animated.Value(0)).current

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg'],
  })

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

    Animated.timing(animatedController, {
      duration: 400,
      useNativeDriver: true,
      toValue: expanded ? 0 : 1,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
    }).start()

    if (onExpand !== undefined) {
      onExpand(!expanded)
    }

    setExpanded(!expanded)
  }

  return (
    <S.Container>
      <TouchableWithoutFeedback onPress={toggleExpand}>
        <S.Row>
          <Text variant='title-h1'>{title}</Text>

          <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
            <Feather name='chevron-down' color='white' size={22} />
          </Animated.View>
        </S.Row>
      </TouchableWithoutFeedback>
      {expanded && <S.Children>{children}</S.Children>}
    </S.Container>
  )
}
