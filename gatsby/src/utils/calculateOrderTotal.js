import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  return order.reduce((runingTotal, singleOrder) => {
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleOrder.id
    );
    return runingTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}
