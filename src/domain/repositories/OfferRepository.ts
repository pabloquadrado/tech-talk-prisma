import { Offer } from "../entities";

export interface OfferRepository {
  list(page: number, limit: number): Promise<Offer[]>;
  getById(id: number): Promise<Offer>;
  persist(offer: Offer): Promise<Offer>;
  delete(id: number): Promise<boolean>;
}