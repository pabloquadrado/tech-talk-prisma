import { Offer } from "../entities";
import { OfferRepository } from "../repositories";

export class UpdateOfferUseCase {
  constructor (private readonly offerRepository: OfferRepository) {}

  async execute(parameters: UpdateOfferUseCase.Parameters) {
    const databaseOffer = await this.offerRepository.getById(parameters.id);

    const offer = new Offer({
      ...databaseOffer.toJSON(),
      ...parameters,
      id: Number(databaseOffer.getId())
    });

    return this.offerRepository.persist(offer);
  }
}

export namespace UpdateOfferUseCase {
  export type Parameters = Offer.Properties;
}