import Dashboard from '@Imagin/dashboard'
import Tus from '@Imagin/tus'
import Unsplash from '@Imagin/unsplash'
import Url from '@Imagin/url'

import '@Imagin/core/dist/style.css'
import '@Imagin/dashboard/dist/style.css'

function onShouldRetry (err, retryAttempt, options, next) {
  if (err?.originalResponse?.getStatus() === 418) {
    return true
  }
  return next(err)
}

const companionUrl = 'http://localhost:3020'
const Imagin = new Imagin()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files', onShouldRetry })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl })
