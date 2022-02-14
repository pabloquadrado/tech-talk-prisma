export default () => `
  SELECT
    id,
    pharmacy_id AS pharmacyId,
    ean,
    sku,
    price,
    price_original AS priceOriginal,
    stock
  FROM offers
  WHERE id = :id
`;