import { handle } from 'hono/cloudflare-pages'
import server from '../src/index'
export const onRequest = handle(server)
