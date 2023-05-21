const express=require('express')

const app=express();

const port=5000;
//midlle ware
app.use(express.json())

//sample data;
const data=[{
    name:"hemanth",
    email:"hemathaim543210@gmail.com"
}]


// rest api

//function

const getAllData = (req, res) => {
  res.status(200).json({
    status: "success",
    data: data,
  });
};


const postData = (req, res) => {
  const d = req.body;
  if (d) {
    data.push(d);
    res.status(201).json({
      status: "success",
      data: data[data.length - 1],
    });
  } else {
    res.status(400).json({
      status: "unsuccess",
      data: "sorry the server could not process they request",
    });
  }
};

const getDataById = (req, res) => {
  const id = req.params.id * 1;
  if (id < data.length) {
    res.status(200).json({
      status: "success",
      data: data[id],
    });
  } else {
    res.status(400).json({
      status: "unsuccess",
      data: "sorry we could not process the request",
    });
  }
};

const deleteData = (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (id < data.length) {
    delete data[id];
    res.status(204);
  } else {
    res.status(400).json({
      status: "success",
      data: "sorry we could not process the request",
    });
  }
};

const patchData=(req,res)=>{

}


app
.route('/')
.get(getAllData)
.post(postData)

app
.route('/:id')
.get(getDataById)
.delete(deleteData)
.patch(patchData)


app.listen(port,()=>{
    console.log(`the server started listening request at port http://locahost:${port}`)
})