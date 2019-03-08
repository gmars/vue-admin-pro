export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('make request to ' + config)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && err.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
