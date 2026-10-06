
const SHOP_NAME = "Armani Store";

const WHATSAPP_NUMBER = "8801302014526";
const NAGAD_NUMBER = "01606938674";
const BKASH_NUMBER = "";

function sendWhatsAppOrder(orderText) {
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(orderText);

  window.open(url, "_blank");
}