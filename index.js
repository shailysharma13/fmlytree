const express = require('express')
const app = express()
//middleware
app.use(express.json());
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/tree', function (req, res) {
  console.log(req.body.name);
  console.log(req.body.spouse);
  console.log(req.body.childrens);
  console.log(req.body.childrens[0]);
  console.log(req.body.childrens[1]);
  console.log(req.body.sibling);
  console.log(req.body.sibling[0]);
  console.log(req.body.sibling[1]);
  console.log(req.body.childrenss);
  console.log(req.body.childrenss[0]);
  console.log(req.body.childrenss[1]);
  res.status(200).send({
    name:req.body.name,
    spouse:req.body.spouse,
    childrens:req.body.childrens,
    sibling:req.body.sibling,
    childrenss:req.body.childrens

  })
})
let port=3000;
app.listen(port,function(){
    console.log(`server is running on port ${port}`);
})