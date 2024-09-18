import Dashboard from '@Imagin/dashboard'
import AwsS3Multipart from '@Imagin/aws-s3-multipart'

import '@Imagin/core/dist/style.css'
import '@Imagin/dashboard/dist/style.css'

//#TODO tests
const Imagin = new Imagin()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3Multipart, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
    // This way we can test that the user provided API still works
    async prepareUploadParts (file, { uploadId, key, parts, signal }) {
      const { number: partNumber, chunk: body } = parts[0]
      const plugin = Imagin.getPlugin('AwsS3Multipart')
      const { url } = await plugin.signPart(file, { uploadId, key, partNumber, body, signal })
      return { presignedUrls: { [partNumber]: url } }
    },
  })

// Keep this here to access Imagin in tests
window.Imagin = Imagin
