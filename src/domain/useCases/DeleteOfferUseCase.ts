import { OfferRepository } from "../repositories";

export class DeleteOfferUseCase {
  constructor (private readonly offerRepository: OfferRepository) {}

  async execute({ id }: DeleteOfferUseCase.Parameters) {
    return this.offerRepository.delete(id);
  }
}

export namespace DeleteOfferUseCase {
  export type Parameters = {
    id: number
  }
}