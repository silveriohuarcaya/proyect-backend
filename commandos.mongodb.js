// COMANDOS DE MongoSH

// Insertar Data
db.users.insertOne({ name: "sue", phone: "935670143" });
db.users.insertMany([
  { name: "Jessica", phone: "978767652" },
  { name: "Andres", phone: "987653454" },
]);
db.users.insertOne({
  name: "sue",
  phone: "987878765",
  age: 26,
  status: "pending",
});

// Insert query, queries
db.users.find();
db.users.find({ name: "mafe" }); //una condicion
db.users.find({ name: "sue", age: "26" }); // Dos condiciones

// Proyection
db.users.find({ name: "mafe" }, { phone: 1 }); // Solo trae el campo phone
db.users.find({}, { name: 1 }); // De todos trae solo el campor name
db.users.find({}, { name: 1, phone: 1 }); // De todos trae el campo name y el campo phone
db.users.find({}, { name: 1, phone: 1 }).limit(3); // De todos pero Traeme solo los 3 primeros
db.users.find({}, { name: 1, phone: 1 }).pretty(); // pretty Los muestra Bonito

// Operadores
db.users.find({ age: { $gt: 20 } }); // traeme todos cuando age sea Mayor a 20

// Update
db.users.updateOne(
  { name: "Mafe" },
  { $set: { name: "mafe", phone: "999888777" } }
); //  Busca "mafe" y reemplaza el campo name y el campo phone
db.users.updateOne({ name: "mafe" }, { $set: { status: "steging" } }); //  Busca UNO "mafe" y reemplaza el campo status, si no existiera status lo agrega

db.users.updateMany({}, { $set: { status: "pending" } }); //  Busca TODOS "mafe" y reemplaza el campo status, si no existiera status lo agrega

db.users.update();

db.users.replaceOne();

// Delete
db.users.deleteOne({ name: "sue" }); // Eliminar solo Uno cuando name sea "sue"
db.users.deleteOne({ _id: ObjectId("62fed4cc11cb461143ecb98e") });
db.users.deleteMany();
db.users.delete();
