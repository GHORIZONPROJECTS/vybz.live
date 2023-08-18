// import { Alert} from "react-native";
export const CartReducer = (state, action) => {
    const { shoppingCart, totalPrice, totalQty } = state

    let item;
    let index;
    let updatedPrice;
    let updatedQty;

    switch (action.type) {
        case 'ADD_TO_CART':
            const check = shoppingCart.find(item=>item.id === action.id);

            if(check){
                console.log('dish already in your cart');
                return state;
            }else{
                item = action.item;
                item['qty'] = 1;
                item['TotalItemPrice'] = item.price * item.qty;
                updatedQty = totalQty + 1 ;
                updatedPrice = parseInt(totalPrice) + parseInt(item.price);

                return{
                    shoppingCart : [ item, ...shoppingCart ],
                    totalPrice : updatedPrice,
                    totalQty : updatedQty

                }
                
            }
        
            break;

            case 'INC':

                item = action.cart;
                item.qty = ++item.qty;
                item.TotalItemPrice = item.price * item.qty;
                updatedQty = totalQty + 1;
                updatedPrice = totalPrice + item.price;
                index = shoppingCart.findIndex(cart => cart.id ===action.id);
                shoppingCart[index] = item;
                return{
                    shoppingCart: [...shoppingCart], 
                    totalPrice : updatedPrice,
                    totalQty : updatedQty
                } 

            case 'DEC' :
                item = action.cart;
                if(item.qty > 1){
                    item.qty = item.qty - 1;
                    item.TotalItemPrice = item.price * item.qty;
                    updatedQty = totalQty - 1;
                    updatedPrice = totalPrice - item.price;
                    index = shoppingCart.findIndex(cart => cart.id ===action.id);
                    shoppingCart[index] = item;
                    return{
                        shoppingCart: [...shoppingCart], 
                        totalPrice : updatedPrice,
                        totalQty : updatedQty
                    } 
    
                }else{
                    return state;
                }
                break;

            case 'DELETE':

                const filtered = shoppingCart.filter(item => item.id !== action.id);
                item = action.cart;
                updatedQty = totalQty - item.qty;
                updatedPrice = totalPrice - item.qty * item.price;
                return{
                    shoppingCart: [...filtered], 
                    totalPrice : updatedPrice,
                    totalQty : updatedQty
                }
                break;

            case 'EMPTY':
                return {
                    shoppingCart: [], totalPrice: 0, totalQty: 0
            }
    
        default:
            return state;
    }
}