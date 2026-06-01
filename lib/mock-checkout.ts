export const checkoutData = {
  address: {
    name: "Budi Santoso",
    phone: "0812-3456-7890",
    label: "Rumah",
    address:
      "Jl. Merdeka No. 123, Medan Kota, Sumatera Utara 20212",
  },

  items: [
    {
      id: "1",
      name: "Nasi Goreng Spesial",
      quantity: 2,
      price: 28000,
    },
    {
      id: "2",
      name: "Ayam Geprek Level 3",
      quantity: 1,
      price: 25000,
    },
    {
      id: "3",
      name: "Es Teh Manis",
      quantity: 2,
      price: 8000,
    },
  ],

  notes:
    "Mohon hubungi saat sudah sampai di depan rumah.",

  fees: {
    deliveryFee: 12000,
    serviceFee: 3000,
  },
};

export const subtotal = checkoutData.items.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);

export const total =
  subtotal +
  checkoutData.fees.deliveryFee +
  checkoutData.fees.serviceFee;