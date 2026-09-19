/* ==========================================================
   YOUR HOUSES
   - Change names, taglines, bedroom counts and prices here.
   - price is the monthly rent in dollars (no $ sign, no comma).
   - To add a photo to a room: put the image in the "images"
     folder, then add   img:"images/your-file.jpg"   to that room.
   - Rooms without img show a "Photo coming soon" tile.
   ========================================================== */

const CURRENCY = "$";
const PRICE_SUFFIX = " / month";

// Turns 1200 into: $1,200 / month
function priceHTML(h) {
  return CURRENCY + h.price.toLocaleString("en-US") + "<small>" + PRICE_SUFFIX + "</small>";
}

const HOUSES = [
  {
    name: "House 1",
    tag: "Sunlit living with skyline views.",
    beds: 2,
    price: 1200,
    cover: "images/u1.jpg",
    rooms: [
      { name: "Living room", img: "images/u1.jpg" },
      { name: "Kitchen" },
      { name: "Dining room" },
      { name: "Master bedroom" },
      { name: "Second bedroom" },
      { name: "Bathroom" },
      { name: "Balcony" }
    ]
  },
  {
    name: "House 2",
    tag: "A kitchen made for gathering.",
    beds: 2,
    price: 1200,
    cover: "images/u2.jpg",
    rooms: [
      { name: "Kitchen", img: "images/u2.jpg" },
      { name: "Living room" },
      { name: "Dining room" },
      { name: "Master bedroom" },
      { name: "Second bedroom" },
      { name: "Bathroom" }
    ]
  },
  {
    name: "House 3",
    tag: "Restful, refined master retreat.",
    beds: 1,
    price: 1200,
    cover: "images/u3.jpg",
    rooms: [
      { name: "Master bedroom", img: "images/u3.jpg" },
      { name: "Living room" },
      { name: "Kitchen" },
      { name: "Bathroom" }
    ]
  },
  {
    name: "House 4",
    tag: "An open-air terrace above the city.",
    beds: 2,
    price: 1200,
    cover: "images/u4.jpg",
    rooms: [
      { name: "Terrace", img: "images/u4.jpg" },
      { name: "Living room" },
      { name: "Kitchen" },
      { name: "Master bedroom" },
      { name: "Second bedroom" },
      { name: "Bathroom" }
    ]
  },
  {
    name: "House 5",
    tag: "Warm light and a sculpted dining nook.",
    beds: 1,
    price: 1200,
    cover: "images/u5.jpg",
    rooms: [
      { name: "Dining room", img: "images/u5.jpg" },
      { name: "Living room" },
      { name: "Kitchen" },
      { name: "Master bedroom" },
      { name: "Bathroom" }
    ]
  },
  {
    name: "House 6",
    tag: "Double-height glazing and a gallery wall.",
    beds: 3,
    price: 1200,
    cover: "images/u6.jpg",
    rooms: [
      { name: "Living room", img: "images/u6.jpg" },
      { name: "Kitchen" },
      { name: "Dining room" },
      { name: "Master bedroom" },
      { name: "Second bedroom" },
      { name: "Third bedroom" },
      { name: "Bathroom" }
    ]
  },
  {
    name: "House 7",
    tag: "Compact, calm and beautifully finished.",
    beds: 1,
    price: 1200,
    cover: "",
    rooms: [
      { name: "Living room" },
      { name: "Kitchen" },
      { name: "Master bedroom" },
      { name: "Bathroom" }
    ]
  },
  {
    name: "House 8",
    tag: "Generous living with a private balcony.",
    beds: 2,
    price: 1200,
    cover: "",
    rooms: [
      { name: "Living room" },
      { name: "Kitchen" },
      { name: "Dining room" },
      { name: "Master bedroom" },
      { name: "Second bedroom" },
      { name: "Bathroom" },
      { name: "Balcony" }
    ]
  },
  {
    name: "House 9",
    tag: "The whole top floor, unhurried.",
    beds: 3,
    price: 1200,
    cover: "",
    rooms: [
      { name: "Living room" },
      { name: "Kitchen" },
      { name: "Dining room" },
      { name: "Master bedroom" },
      { name: "Second bedroom" },
      { name: "Third bedroom" },
      { name: "Bathroom" },
      { name: "Terrace" }
    ]
  }
];