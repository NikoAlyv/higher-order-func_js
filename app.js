//TODO Task

// const stocks = [
//   {
//     symbol: "socar",
//     price: 1670,
//     sector: "oil",
//   },

//   {
//     symbol: "ebay",
//     price: 1970,
//     sector: "e-commerce",
//   },
//   {
//     symbol: "amazon",
//     price: 2009,
//     sector: "e-commerce",
//   },
//   {
//     symbol: "azersun",
//     price: 1245,
//     sector: "hoding",
//   },
// ];

//! Part 2

//   const randomPrice1Inc = () => {
//       const rand =Math.random()
//     const randomIn = Math.floor(rand * stocks.length);
//      const price = stocks[randomIn].price + rand*20;
//     console.log(`${stocks[randomIn].symbol} price:${price}`);
//   };
//   const randomPrice1dec = () => {
//       const rand =Math.random()
//       const randomIn = Math.floor(rand * stocks.length);
//        const price = stocks[randomIn].price - rand*35;
//       console.log(`${stocks[randomIn].symbol} price:${price}`);
//     };
//   setInterval(randomPrice1Inc,2000,140)
//   setInterval(randomPrice1dec,2500,180)

//! Part 3

// const res =  stocks.filter((item)=>{
//     if(item.sector =="oil")return item
// }
// )

// console.log(res);

//! Part 4
//? 1 forma

// const res = () => {
//   const rand = Math.random();
//   const randomIn = Math.floor(rand * stocks.length);
//   if (stocks[randomIn].price < 2000) {
//     console.log(
//       `Symbol:${stocks[randomIn].symbol}\nPrice:${stocks[randomIn].price}\nQiymet 2000$-dan asagidir`
//     );
//     stocks[randomIn].price += rand * 100;
//     console.log(stocks[randomIn].price);
//   } else {
//     console.log(
//       `Symbol:${stocks[randomIn].symbol}\nPrice:${stocks[randomIn].price}\nQiymet 2000$-dan yuxaridir `
//     );
//     stocks[randomIn].price -= rand * 30;
//     console.log(stocks[randomIn].price);
//   }
// };

// setInterval(res, 2000);

//? 2 forma


//   const res = () => {
//     stocks.forEach(item =>{
//     if (item.price < 2000) {
//       console.log(
//         `Symbol:${item.symbol}\nPrice:${item.price}\nQiymet 2000$-dan asagidir`
        
//       );
//       item.price += Math.random()*1000
//       console.log(
//         `----------New price:${item.price}----------- `
//       );
//     } else {
//       console.log(
//         `Symbol:${item.symbol}\nPrice:${item.price}\nQiymet 2000$-dan yuxaridir `
//       );
//       item.price -= Math.random()*1000
//       console.log(
//         `----------New price:${item.price}----------- `
//       );
//   }})
//   };
// setTimeout(res, 2000);

// clearTimeout(res);
