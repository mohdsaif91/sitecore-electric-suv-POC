const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { getPublicUrl } = require('@sitecore-jss/sitecore-jss-nextjs')

const dev = process.env.NODE_ENV !== 'production'
//const hostname = 'rsg-dev-auto-ci-017-nextjs.scm.azurewebsites.net'
// const hostname = 'devnew.mahindraelectricautomobile.com'
const hostname = 'localhost'

const port = process.env.PORT || 3000

// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      const publicUrl = getPublicUrl();


      // app.setAssetPrefix('https://MahindraElectricSuv-cdn.mahindraelectricautomobile.com')
      // app.setAssetPrefix('.')
      app.setAssetPrefix(publicUrl)

    // res.setHeader("Access-Control-Allow-Origin", "https://devnew.mahindraelectricautomobile.com");
    res.setHeader("Access-Control-Allow-Origin", "localhost");
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on https://${hostname}:${port}`)
  })
})
