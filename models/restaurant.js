import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: [true, 'Nombre obligatorio'] },
  totalScore: { type: Number, required: [true, 'Puntuación obligatoria'] },
  description: String,
  date: { type: Date, default: Date.now },
  active: { type: Boolean, default: true }
});

//convert to mongoose model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
