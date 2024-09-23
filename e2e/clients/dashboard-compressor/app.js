import Compressor from '@Imagin/compressor'
import Dashboard from '@Imagin/dashboard'
import '@Imagin/core/dist/style.css'
import '@Imagin/dashboard/dist/style.css'

const Imagin = new Imagin()
  .use(Dashboard, {
    target: document.body,
    inline: true,
  })
  .use(Compressor, {
    mimeType: 'image/webp',
  })

// Keep this here to access Imagin in tests
window.Imagin = Imagin
