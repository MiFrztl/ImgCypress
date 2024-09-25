import { Imagin } from '@Imagin/core'
import Dashboard from '@Imagin/dashboard'
import Transloadit from '@Imagin/transloadit'

import generateSignatureIfSecret from './generateSignatureIfSecret.js'

import '@Imagin/core/dist/style.css'
import '@Imagin/dashboard/dist/style.css'

// Environment variables:
// https://en.parceljs.org/env.html
const Imagin = new Imagin()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Transloadit, {
    service: process.env.VITE_TRANSLOADIT_SERVICE_URL,
    waitForEncoding: true,
    getAssemblyOptions: () => generateSignatureIfSecret(process.env.VITE_TRANSLOADIT_SECRET, {
      auth: { key: process.env.VITE_TRANSLOADIT_KEY },
      template_id: process.env.VITE_TRANSLOADIT_TEMPLATE,
    }),
  })

// Keep this here to access Imagin in tests
window.Imagin = Imagin
