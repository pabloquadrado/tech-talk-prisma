export default () => `
  INSERT INTO offers (pharmacy_id, ean, sku, price, price_original, stock)
  VALUES (:pharmacyId,:ean,:sku,:price,:priceOriginal,:stock)
`;