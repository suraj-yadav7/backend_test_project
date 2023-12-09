import mongooes from 'mongooes';

// here schema can take multiple objects one object and other (optional) timestamps:true - for noting time stamp lik createdAt, updatedAt
const userSchema = new mongooes.schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const userM = mongooes.model('User', userSchema);
// refernce is given to todomodels
// it means what model need to be created based on with schema: then here "User": model based: userSchema
