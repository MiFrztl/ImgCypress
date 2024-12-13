import Imagin from '@Imagin/core'
import Box from '..'

{
  const Imagin = new Imagin()
  Imagin.use(Box, {
    companionUrl: '',
    companionCookiesRule: 'same-origin',
    target: 'body',
    title: 'title',
  })
}
