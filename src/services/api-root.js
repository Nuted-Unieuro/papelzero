export default function apiRoot () {
    return  process.env.VUE_APP_DEPLOY_ENV === 'LOCAL' ?
    process.env.VUE_APP_API_ROOT_URL : process.env.VUE_APP_API_ROOT_URL_HEROKU
  }
  