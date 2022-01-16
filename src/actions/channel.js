import axios from 'axios'
import { useState } from 'react'

export default function useChannel() {
  const [channelDetail, setChannelDetail] = useState(null)

  const getChannelDetail = (channelName) => {
    axios({
      method: 'GET',
      url: `/api/youtube/${channelName}`
    }).then((resp) => {
      console.log(resp)
      setChannelDetail(resp?.data?.channel?.items[0])
    }).catch((err) => {
      console.log(err)
    })
  }

  const getChannelDetailViaId = (channelId) => {
    axios({
      method: 'GET',
      url: `/api/youtube/channelId/${channelId}`
    }).then((resp) => {
      console.log(resp)
      setChannelDetail(resp?.data?.channel?.items[0])
    }).catch((err) => {
      console.log(err)
    })
  }

  return {
    getChannelDetailViaId,
    getChannelDetail,
    channelDetail
  }
}
