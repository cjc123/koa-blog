const Router = require("koa-router");
const Article = require("../dbs/models/article");

let router = new Router({ prefix: "/articles" });

// 文章列表
router.get("/articleList", async (ctx, next) => {
  const { page, pageSize } = ctx.request.query;
  if (!page || !pageSize) {
    ctx.body = {
      code: -1,
      content: "",
      msg: "参数错误"
    };
    return;
  }
  const count = await Article.countDocuments();
  const data = await Article.find({}, "_id title desc")
    .skip((page - 1) * pageSize)
    .limit(+pageSize)
    .sort({ _id: -1 });

  ctx.body = {
    code: 0,
    content: { count, list: data }
  };
});

// 文章详情
router.get("/articleDetail", async (ctx, next) => {
  const { id } = ctx.request.query;
  const data = await Article.findOne({ _id: id }, "_id title content");
  ctx.body = {
    code: 0,
    content: data
  };
});

// 新增文章
router.post("/addArticle", async (ctx, next) => {
  const { title, content, desc } = ctx.request.body;
  if (!title || !content) {
    ctx.body = {
      code: -1
    };
    return;
  }
  let article = new Article({ title, content, desc });
  let result = await article.save();
  if (result) {
    ctx.body = {
      code: 0
    };
  } else {
    ctx.body = {
      code: -1
    };
  }
});

module.exports =  router;
