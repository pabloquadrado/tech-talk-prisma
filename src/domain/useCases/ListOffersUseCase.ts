import { Offer } from "../entities";
import { OfferRepository } from "../repositories";

export class ListOffersUseCase {
  constructor (private readonly offerRepository: OfferRepository) {}

  async execute({ page, limit }: ListOffersUseCase.Parameters) {
    const take = page && !Number.isNaN(page) ? Number(page) : 0;
		const size = limit && !Number.isNaN(limit) ? Number(limit) : 0;

		const skip = (take <= 0 ? 0 : take - 1) * size;

    return this.offerRepository.list(skip, size);
  }
}

export namespace ListOffersUseCase {
  export type Parameters = {
    page: number;
    limit: number;
  }
}