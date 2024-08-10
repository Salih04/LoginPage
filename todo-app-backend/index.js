const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// MongoDB bağlantisi için URI'yi burada tanımladım
const MONGO_URI = 'mongodb://localhost:27017/';

// MongoDB bağlantisi
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB bağlantisi başarili'))
.catch((error) => console.log('MongoDB bağlanti hatasi:', error));

// Basit bir test endpointi
app.get('/', (req, res) => {
  res.send('Merhaba, Express sunucusu çalişiyor!');
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalişiyor.`);
});

const Todo = require('../todo-app-backend/models/Todo');

// Yeni bir To-Do ekle
app.post('/api/todos', async (req, res) => {
  const { title } = req.body;
  try {
    const newTodo = new Todo({
      title,
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    res.status(500).send('Sunucu Hatasi');
  }
});

// Tüm To-Do'lari al
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).send('Sunucu Hatasi');
  }
});

// To-Do'yu güncelle
app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).send('Sunucu Hatasi');
  }
});

// To-Do'yu sil
app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.json({ msg: 'To-Do Silindi' });
  } catch (error) {
    res.status(500).send('Sunucu Hatasi');
  }
});
