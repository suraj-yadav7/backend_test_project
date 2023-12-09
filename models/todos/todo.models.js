import mongooes from 'mongooes';

const todoSchema = new mongooes.schema(
  {
    content: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongooes.Schema.Types.ObjectId,
      // reference is taken from usermodel
      ref: 'User',
    },
    complete: {
      type: Boolean,
      default: false,
    },
    subTodos: [
      {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const todo = mongooes.model('Todo', todoSchema);
