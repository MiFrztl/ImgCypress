import '@Imagin/core/dist/style.css'
import '@Imagin/dashboard/dist/style.css'
import Dashboard from '@Imagin/dashboard'
import AwsS3 from '@Imagin/aws-s3'



const Imagin = new Imagin()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  })

