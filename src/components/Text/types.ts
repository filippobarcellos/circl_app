import { TextProps } from './Text'

type WeightProps = 400 | 500 | 700 | 900

type SizeProps = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'

type ColorProps = 'white' | 'gray'

type Variants =
  | 'title-h1'
  | 'title-h3'
  | 'paragraph-b1'
  | 'paragraph-b1-bold'
  | 'paragraph-b2'
  | 'paragraph-b2-bold'

type VariantProps = Omit<TextProps, 'children'>

const getVariantProps = (variant?: Variants) => {
  const props: {
    [key in Variants]: VariantProps
  } = {
    'title-h1': {
      family: 900,
      size: 'xlarge',
    },
    'title-h3': {
      family: 700,
      size: 'large',
    },
    'paragraph-b1': {
      size: 'medium',
      family: 400,
    },
    'paragraph-b1-bold': {
      size: 'medium',
      family: 700,
    },
    'paragraph-b2': {
      size: 'small',
      family: 500,
    },
    'paragraph-b2-bold': {
      size: 'small',
      family: 700,
    },
  }

  if (!variant) {
    return
  }

  return props[variant]
}

export { WeightProps, SizeProps, ColorProps, Variants, getVariantProps }
