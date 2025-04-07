import ShoppingListModel from "../models/ShoppingList.js"


// Función para obtener sólo una lista de compras por ID //////////////////////
///////////////////////////////////////////////////////////////////////////////
export const getShoppingList = async (req, res) => {
    try {
        const listId = req.params.slid
        const getOneList = await ShoppingListModel.findById(listId)

        if (!getOneList) {
            return res.status(404).json({ success: false, payload: "No se encontró la lista de compras solicitada" })
        }

        res.status(200).json({ success: true, payload: getOneList })
        //         //
        // Testing //
        //         //
        console.log("\nFunción: getShoppingList\nLa lista consultada es:\n", getOneList)
    } catch (error) {
        console.log("Error en getShoppingList", error)
        res.status(500).json({ success: false, payload: error })
    }
}


// Función para obtener todas las listas de compras ///////////////////////////
///////////////////////////////////////////////////////////////////////////////
export const getShoppingLists = async (req, res) => {
    try {
        const getAllLists = await ShoppingListModel.find()

        res.status(200).json({ success: true, payload: getAllLists })
        //         //
        // Testing //
        //         //
        console.log("\nFunción: getShoppingLists\nLas listas obtenidas son:\n", getAllLists)
    } catch (error) {
        console.log("Error en getShoppingLists", error)
        res.status(500).json({ success: false, payload: error })
    }
}


// Función para crear una nueva lista de compras //////////////////////////////
///////////////////////////////////////////////////////////////////////////////
export const createShoppingList = async (req, res) => {
    try {
        const { name, items } = req.body

        if (!name || name.trim() === "") {
            return res.status(400).json({ success: false, payload: "Se debe asociar un nombre a la lista de compras" })
        }

        const newList = await ShoppingListModel.create({ name, items })

        res.status(201).json({ success: true, payload: newList })
        //         //
        // Testing //
        //         //
        console.log("\nFunción: createShoppingList\nLa lista creada es:\n", newList)
    } catch (error) {
        console.log("Error en createShoppingList", error)
        res.status(500).json({ success: false, payload: error })
    }
}


// Función para actualizar una lista de compra ya existente ///////////////////
///////////////////////////////////////////////////////////////////////////////
export const updateShoppingList = async (req, res) => {
    try {
        const listId = req.params.slid
        const updatedData = req.body

        const updatedList = await ShoppingListModel.findByIdAndUpdate(listId, updatedData, { new:true })

        if (!updatedList) {
            return res.status(404).json({ success: false, payload: "La lista que intenta modificarse no se ha encontrado" })
        } 
            
        res.status(200).json({ success: true, payload: updatedList })
        //         //
        // Testing //
        //         //
        console.log("\nFunción: updateShoppingList\nLa lista actualizada es:\n", updatedList)
    } catch (error) {
        console.log("Error en updateShoppingList", error)
        res.status(500).json({ success: false, payload: error })
    }
}


// Función para eliminar una lista de compras de la base de datos /////////////
///////////////////////////////////////////////////////////////////////////////
export const deleteShoppingList = async (req, res) => {
    try {
        const listId = req.params.slid

        const deletedList = await ShoppingListModel.findByIdAndDelete(listId)

        if (!deletedList) {
            return res.status(404).json({ success: false, payload: "La lista que intenta eliminarse no se ha encontrado" })
        }
            
        res.status(200).json({ success: true, payload: deletedList })
        //         //
        // Testing //
        //         //
        console.log("\nFunción: deleteShoppingList\nLa lista eliminada es:\n", deletedList)
    } catch (error) {
        console.log("Error en deleteShoppingList", error)
        res.status(500).json({ success: false, payload: error })
    }
}