import { Offer } from "../entities";
import { OfferRepository } from "../repositories";

export class CreateOfferUseCase {
  constructor (private readonly offerRepository: OfferRepository) {}

  async execute(parameters: CreateOfferUseCase.Parameters) {
    const offer = new Offer(parameters);

    return this.offerRepository.persist(offer);
  }
}

export namespace CreateOfferUseCase {
  export type Parameters = Omit<Offer.Properties, 'id'>
}