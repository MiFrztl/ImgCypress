import Imagin from '@Imagin/core'
import Dashboard from '@Imagin/dashboard'
import RemoteSources from '@Imagin/remote-sources'
import Webcam from '@Imagin/webcam'
import ScreenCapture from '@Imagin/screen-capture'
import GoldenRetriever from '@Imagin/golden-retriever'
import ImageEditor from '@Imagin/image-editor'
import DropTarget from '@Imagin/drop-target'
import Audio from '@Imagin/audio'
import Compressor from '@Imagin/compressor'

import '@Imagin/core/dist/style.css'
import '@Imagin/dashboard/dist/style.css'

const COMPANION_URL = 'http://companion.Imagin.io'

const Imagin = new Imagin()
  .use(Dashboard, { target: '#app', inline: true })
  .use(RemoteSources, { companionUrl: COMPANION_URL })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(DropTarget, { target: document.body })
  .use(Compressor)
  .use(GoldenRetriever, { serviceWorker: true })

// Keep this here to access Imagin in tests
window.Imagin = Imagin
