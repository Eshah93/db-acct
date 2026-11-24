import { Hono } from 'hono'
import type { FC } from 'hono/jsx'
import About from './About'

const app = new Hono()

// app.get('/', (c) => {
//   return c.text('Hello 343')
// })

const Layout: FC = (props) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  )
}

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout>
      <h1>Hello accounting 343</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>
        })}
      </ul>
    </Layout>
  )
}

app.get('/page', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.html(<Top messages={messages} />)
})

app.get('/', (c) => {
  return c.html(
    <Layout>
      <h1>Hello</h1>
    </Layout>
  )
})

app.get('/about', (c) => {
  return c.html(<About />)
})

export default app
