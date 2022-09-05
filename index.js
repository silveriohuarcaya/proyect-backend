// perform

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://admin:pUAfptazvppXgs8n@silveriohuarcaya.prgzdly.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect(async (err) => {
  if (err) {
    console.error("Not Connected");
    return;
  }

  const collection = client.db("agenda").collection("users");

  // console.log("Collection Conected: ", collection);
  const findResult = await collection.find({}).toArray();
  console.log("Found documents: ", findResult);

  // perform actions on the collection object
  client.close();
});