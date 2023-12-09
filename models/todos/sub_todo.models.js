import mongooes from mongooes

const subTodoSchema=new Schema({
  content:{
    type:String,
    required:true
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongooes.Schema.Types.ObjectId,
    ref:"User"
  },

},{timestamps:true})

export const subTodo = mongooes.model("SubTodo", subTodoSchema)