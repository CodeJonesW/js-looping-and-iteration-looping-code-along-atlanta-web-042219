// Code your solutions in this file
function wrapGifts(gifts) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}
