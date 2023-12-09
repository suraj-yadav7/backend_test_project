import mongooes from "mongooes"

const orderItemSchema = new mongooes.Schema({
  productId:{
    type:mongooes.Schema.Types.ObjectId,
    ref:"Product"
  },
  qunatity:{
    type:Number,
    required:true
  }
})

const orderSchema=new mongooes.Schema(
  {
    orderPrice:{
      type:Number,
      required:true
    },
    customer:{
      type:mongooes.Schema.Types.ObjectId,
      ref:"User"
    },
    orderItems:{
      type:[orderItemSchema]
    },
    address:{
      type:String,
      required:true
    }

  },{timestamps:true})

export const Order=mongooes.model("Order",orderSchema)