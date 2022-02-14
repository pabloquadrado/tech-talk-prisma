export default () => `
  UPDATE offers SET
    pharmacy_id = :pharmacyId,
    ean = :ean,
    sku = :sku,
    price = :price,
    price_original = :priceOriginal,
    stock = :stock
  WHERE id = :id
`;