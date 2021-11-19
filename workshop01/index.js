const Koa = require('koa')
const Router = require('@koa/router')

const path = require('path')
const views = require('koa-views')
const serve = require('koa-static')

const landingCtx = require('./contexts/landing')

const app = new Koa()
const router = new Router()

app
    .use(serve(__dirname + '/public'))
    .use(views(path.join(__dirname, '/views'), {
        extension: 'hbs',
        map: {
            hbs: 'handlebars'
        }
    }))

router.get('/', async function (ctx) {
    await ctx.render('landing', { motd: landingCtx.getMotd() })
})

app
    .use( router.routes())
    .use(router.allowedMethods())
    .listen(3000, () => {
        console.log('Listening...')
    })
