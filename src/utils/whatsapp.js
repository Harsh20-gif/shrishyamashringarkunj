import { BRAND } from '../config/brand';

/**
 * Builds the WhatsApp checkout message and direct wa.me link.
 * 
 * Target format:
 * 🙏 Radhe Radhe! New Order from Website
 * ━━━━━━━━━━
 * 1. Product Name (variant) × qty — ₹price
 * ...
 * Total: ₹XXXX
 * ━━━━━━━━━━
 * Customer: name
 * Phone: xxx
 * Address: full address, city, state, pincode
 * Customization note: ...
 * 
 * Payment & delivery charges ko WhatsApp par confirm karein 🙏
 */
export function buildWhatsAppCartOrderUrl({ items = [], customer = {}, customizationNote = '' }) {
  const lineDivider = '━━━━━━━━━━━━━━━━━━━━';
  
  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const itemLines = items.map((item, index) => {
    const variantStr = item.selectedVariant ? ` (${item.selectedVariant})` : '';
    const itemTotal = item.price * item.quantity;
    return `${index + 1}. *${item.name}*${variantStr} × ${item.quantity} — ₹${itemTotal}`;
  }).join('\n');

  let message = `🙏 *Radhe Radhe! New Order from Website*\n${lineDivider}\n`;
  message += `${itemLines}\n`;
  message += `\n*Estimated Item Subtotal:* ₹${totalAmount}\n${lineDivider}\n`;
  message += `👤 *Customer:* ${customer.name || 'Bhakti Sevak'}\n`;
  message += `📞 *Phone:* ${customer.phone || 'Not provided'}\n`;
  
  const addressParts = [
    customer.address,
    customer.city,
    customer.state,
    customer.pincode ? `PIN: ${customer.pincode}` : ''
  ].filter(Boolean).join(', ');
  
  message += `📍 *Delivery Address:* ${addressParts || 'To be shared on chat'}\n`;

  // Merge any global or product-specific customization notes
  const notes = [];
  if (customizationNote && customizationNote.trim()) {
    notes.push(customizationNote.trim());
  }
  
  items.forEach(item => {
    if (item.customNote && item.customNote.trim()) {
      notes.push(`[${item.name}]: ${item.customNote.trim()}`);
    }
  });

  if (notes.length > 0) {
    message += `✍️ *Customization / Seva Note:* ${notes.join('; ')}\n`;
  }

  message += `${lineDivider}\n`;
  message += `🙏 _Payment & delivery charges ko WhatsApp par confirm karein._\n`;
  message += `🌸 _Shri Vrindavan Dham Blessings!_`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Builds direct WhatsApp URL for instant single product "Buy Now on WhatsApp"
 */
export function buildSingleProductBuyUrl({ product, selectedVariant = null, quantity = 1, customizationNote = '' }) {
  const lineDivider = '━━━━━━━━━━━━━━━━━━━━';
  const unitPrice = selectedVariant ? selectedVariant.price : product.price;
  const totalPrice = unitPrice * quantity;
  const variantText = selectedVariant ? ` (${selectedVariant.name})` : '';

  let message = `🙏 *Radhe Radhe! Inquiry & Instant Order*\n${lineDivider}\n`;
  message += `Main ye offering order karna chahta/chahti hoon:\n`;
  message += `*Product:* ${product.name}${variantText}\n`;
  message += `*Quantity:* ${quantity}\n`;
  message += `*Subtotal:* ₹${totalPrice}\n`;
  
  if (customizationNote && customizationNote.trim()) {
    message += `✍️ *Customization Note:* ${customizationNote.trim()}\n`;
  }
  
  message += `${lineDivider}\n`;
  message += `Kripya availability, delivery charges aur payment process batayein. 🙏\n`;
  message += `🌸 _Shri Hit Tulsi (Vrindavan)_`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * General inquiry link with polite devotional greeting
 */
export function buildGeneralInquiryUrl(topic = '') {
  let message = `🙏 *Radhe Radhe Shri Hit Tulsi!* \n`;
  if (topic) {
    message += `Mujhe *${topic}* ke baare mein jaankari chahiye. `;
  } else {
    message += `Mujhe Vrindavan seva samagri ke baare mein jaankari chahiye. `;
  }
  message += `Kripya margdarshan karein. 🙏`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Safe opening in mobile or desktop browser
 */
export function openWhatsApp(url) {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

