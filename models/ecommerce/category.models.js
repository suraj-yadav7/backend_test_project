import mongooes from "mongooes"

const categorySchema = new mongooes.Schema(
  {
    name:{
      type:String,
      required: true
    }

},{timestamps:true})

export const Category = mongooes.model("Category", categorySchema)