const uuid = require('uuid')
const path = require('path')
const {Token, TokenInfo} = require('../models/models')
const ApiError = require('../error/Apierror')
class TokenController {
  async create(req, res, next) {
try {
  const {name, price, brandId, typeId, info}  = req.body
  const {img} = req.files
  let fileName = uuid.v4() + ".jpg"
  img.mv(path.resolve(__dirname, '..', 'static', fileName))
  const token = await Token.create({name, price, brandId, typeId, img: fileName})

  if(info) {
    info = JSON.parse(info)
    info.forEach(i =>
      TokenInfo.create({
        title: i.title,
        description: i.description,
        tokenId: token.id
      })
      )
  }




  return res.json(token)
} catch (e) {
  next(ApiError.badRequest(e.message))
}

    

  }

  async getAll(req, res) {

    let {brandId, typeId, limit, page } = req.query
    page = page || 1
    limit = limit || 4
    let offset = page * limit - limit
    let tokens;
    if(!brandId && !typeId) {
tokens = await Token.findAndCountAll({limit, offset})
    }
    if (brandId && !typeId) {
      tokens = await Token.findAndCountAll({where:{brandId}, limit, offset})

    }
    if (!brandId && typeId) {
      tokens = await Token.findAndCountAll({where:{typeId}, limit, offset})

    }
    if (brandId && typeId) {
      tokens = await Token.findAndCountAll({where:{brandId, typeId}, limit, offset})

    }
    return res.json(tokens)
    
  }

  async getOne(req, res) {
    const {id} = req.params
    const token = await Token.findOne(
      {
        where: {id},
        include: [{model: TokenInfo, as:'info'}]
    
    },
    )
    return res.json(token)
  }

}

module.exports = new TokenController()