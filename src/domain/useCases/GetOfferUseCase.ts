import { Offer } from "../entities";
import { OfferRepository } from "../repositories";

export class GetOfferUseCase {
  constructor (private readonly offerRepository: OfferRepository) {}

  async execute({ id }: GetOfferUseCase.Parameters) {
    return this.offerRepository.getById(id);
  }
}

export namespace GetOfferUseCase {
  export type Parameters = {
    id: number
  }
}