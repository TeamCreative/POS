const cart = (state = [{ id:"123",name:"Gurpreet",Monday:"Day Off",Tuesday:"Day Off", Wednesday:"Day Off"},{ id:"123",name:"Gurpreet",Monday:"Day Off",Tuesday:"Day Off", Wednesday:"Day Off"},{ id:"123",name:"Gurpreet",Monday:"Day Off",Tuesday:"Day Off", Wednesday:"Day Off"},{ id:"123",name:"Gurpreet",Monday:"Day Off",Tuesday:"Day Off", Wednesday:"Day Off"}], action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default cart;