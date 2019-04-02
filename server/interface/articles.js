import Router from 'koa-router';
import Article from '../dbs/models/article'

let router = new Router({prefix: '/articles'});

router.get('/test', async (ctx, next) => {
    ctx.body = {
        code: 0,
        content:"test"
      }
})

router.post('/addArticle', async (ctx, next) => {
  console.log(ctx.request.body)
  const {title,content} = ctx.request.body;
  let article = new Article({title, content})
  let result = await article.save()
  if (result) {
    ctx.body = {
      code: 0,
    }
  }else{
    ctx.body = {
      code: -1,
    }
  }
  
})

export default router;