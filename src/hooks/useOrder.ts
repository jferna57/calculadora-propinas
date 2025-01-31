import { useState, useEffect } from "react";
import type { OrderItemT } from "../types";

export default function useOrder() {

  const [order, setOrder] = useState<OrderItemT[]>([])
  const [total, setTotal] = useState<number>(0)


  // Add an item to the order
  const addItem = (item: OrderItemT) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
    if (itemIndex === -1) {
      setOrder([...order, item])
    } else {
      const newOrder = [...order]
      newOrder[itemIndex].quantity += 1
      setOrder(newOrder)
    }
  }
  // Remove an item from the order
  const removeItem = (item: OrderItemT) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== item.id)
    setOrder(newOrder)
  }

  //increment quantity
  const incrementQuantity = (item: OrderItemT) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
    if (itemIndex === -1) {
      return
    } else {
      const newOrder = [...order]
      newOrder[itemIndex].quantity += 1
      setOrder(newOrder)
    }
  }

  //decrement quantity
  const decrementQuantity = (item: OrderItemT) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
    if (itemIndex === -1) {
      return
    } else {
      const newOrder = [...order]
      if (newOrder[itemIndex].quantity === 1) {
        newOrder.splice(itemIndex, 1)
      } else {
        newOrder[itemIndex].quantity -= 1
      }
      setOrder(newOrder)
    }
  }

  // Calculate the total of the order
  const calculateTotal = () => {
    const total = order.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    setTotal(total)
  }

  // update the total when the order changes
  useEffect(() => {
    calculateTotal()
  }, [order]) 

  return {
    order,
    addItem,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    total,
  }
}

