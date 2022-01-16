import { google } from 'googleapis'

let googleAuth

export default async (req, res) => {
  const { channelName } = req.query

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
    forUsername: channelName,
    part: 'snippet,contentDetails,statistics'
  })

  const channel = response.data
  // const { subscriberCount, viewCount } = channel.statistics

  return res.status(200).json({
    channel
  })
}
