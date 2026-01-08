import { calculateDiscount } from "./offerEngine.service";

export const applyBestOffer = (
  offers: any[],
  price: number,
  quantity: number
) => {
  let bestOffer = null;
  let maxDiscount = 0;  

  for (const offer of offers) {
    const discount = calculateDiscount(offer, price, quantity);
    
    if (discount > maxDiscount) {
      maxDiscount = discount;
      bestOffer = offer;
    }
  }

  return { bestOffer, discount: maxDiscount };
};
