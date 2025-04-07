import { Schema, model } from "mongoose"

const ShoppingListSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    items: [{
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        },
        pending: {
            type: Boolean,
            default: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ShoppingListModel = model("ShoppingList", ShoppingListSchema)

export default ShoppingListModel