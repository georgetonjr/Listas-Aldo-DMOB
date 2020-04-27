const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())

router.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname+'/index.html'))
})

router.post('/s', (req, res)=>{
  if (!req.body && !req.params){
    res.send("ThErE iS sOmEtHiNg WrOnG, PlEaSe TrY aGaIn!!!")
  }
  var soma = 0
  var obj = req.body
  Object.values(obj).forEach(n => soma += parseInt(n))
  res.send(`${soma}`)
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
router.post('/operacao', (req, res) =>{
  //Adição
  var soma = 0
  var obj = req.body
  Object.values(obj).forEach(n => soma += parseInt(n))
  res.send(`${soma}`)
})

router.get('/operacao', (req, res) =>{
  //Subtração
  var { v1, v2 } = req.query
  var n1 = parseFloat(v1)
  var n2 = parseFloat(v2)

  if (n2 > n1)
    res.send(`${ n2 - n1 }`) 

  res.send(`${ n1 - n2 }`) 
})

app.use('/', router);
app.listen(3000, ()=>{
  console.log('Listening on port 3000')
});