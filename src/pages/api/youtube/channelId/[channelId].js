import { google } from 'googleapis'

let googleAuth
// const CLIENT_SECRET_FILE = 'client_secret.json'

export default async (req, res) => {
  const { channelId } = req.query

  googleAuth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY
    },
    scopes: ['https://www.googleapis.com/auth/youtube.readonly']
  })

  const youtube = google.youtube({
    auth: googleAuth,
    version: 'v3'
  })

  const response = await youtube.channels.list({
    id: channelId,
    part: 'snippet,contentDetails,statistics'
  })

  const channel = response.data
  // const { subscriberCount, viewCount } = channel.statistics
  // console.log(channel.items[0].statistics)
  return res.status(200).json({
    channel
  })
}
