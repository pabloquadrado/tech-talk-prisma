export class Offer {
  private id: number;
  private pharmacyId: number;
  private ean: string;
  private sku: string;
  private price: number;
  private priceOriginal: number;
  private stock: number;

  constructor(properties: Offer.Properties) {
    if (properties.id) this.id = properties.id;
    this.pharmacyId = properties.pharmacyId;
    this.ean = properties.ean;
    this.sku = properties.sku;
    this.price = properties.price;
    this.priceOriginal = properties.priceOriginal;
    this.stock = properties.stock;
  }

  setId(id: number): void {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  getPharmacyId(): number {
    return this.pharmacyId;
  }

  setPharmacyId(pharmacyId: number): void {
    this.pharmacyId = pharmacyId;
  }

  getEan(): string {
    return this.ean;
  }

  setEan(ean: string): void {
    this.ean = ean;
  }

  getSku(): string {
    return this.sku;
  }

  setSku(sku: string): void {
    this.sku = sku;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getStock(): number {
    return this.stock;
  }

  setStock(stock: number): void {
    this.stock = stock;
  }

  getPriceOriginal(): number {
    return this.priceOriginal;
  }

  setPriceOriginal(priceOriginal: number): void {
    this.priceOriginal = priceOriginal;
  }

  toJSON(): Record<string, unknown> {
    return {
      id: Number(this.id),
      pharmacyId: this.pharmacyId,
      ean: this.ean,
      sku: this.sku,
      price: Number(this.price),
      priceOriginal: Number(this.priceOriginal),
      stock: this.stock,
    };
  }
}

export namespace Offer {
  export type Properties = {
    id?: number;
    pharmacyId: number;
    ean: string;
    sku: string;
    price: number;
    priceOriginal: number;
    stock: number;
  }
}