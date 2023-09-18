import UserAgent from 'user-agents';
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');

	const userAgent = new UserAgent({ deviceCategory: 'mobile' })
  res.json(userAgent.toString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
