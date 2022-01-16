## Instructions
## create .env file

and set the environment variables

YOUTUBE_API_KEY
YOUTUBE_CHANNEL_ID
YOUTUBE_CLIENT_ID

FIREBASE_CONFIG_APIKEY
FIREBASE_CONFIG_AUTHDOMAIN
FIREBASE_CONFIG_PROJECTID
FIREBASE_CONFIG_STORAGEBUCKET
FIREBASE_CONFIG_MESSAGINGSENDERID
FIREBASE_CONFIG_APPID
FIREBASE_CONFIG_MEASUREMENTID

GOOGLE_PRIVATE_KEY
GOOGLE_CLIENT_EMAIL

## download the credential file from google console.
the structure would be like this:
```
{
  "web":{
    "client_id":"",
    "project_id":"",
    "auth_uri":"",
    "token_uri":"",
    "auth_provider_x509_cert_url":"",
    "client_secret":"",
    "redirect_uris":[
      ""
    ],
    "javascript_origins":[
      "http://localhost:3000","http://localhost:5000",""
    ]
  }
}
```
