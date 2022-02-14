import { PrismaClient } from ".prisma/client";
import { Offer as DomainOffer } from "../../domain/entities";
import { OfferRepository } from "../../domain/repositories";

export class OfferRepositoryPrisma implements OfferRepository {
  constructor(private readonly client: PrismaClient) {}

  async list(page: number, limit: number): Promise<DomainOffer[]> {
    const offers = await this.client.offer.findMany({
      skip: page > 0 ? page : 0,
      take: limit > 0 ? limit : 10,
    });

    return offers.map(offer => new DomainOffer(offer))
  }

  async getById(id: number): Promise<DomainOffer> {
    const offer = await this.client.offer.findUnique({
      where: { id: Number(id) }
    })

    return new DomainOffer(offer);
  }

  async persist(offer: DomainOffer): Promise<DomainOffer> {
    try {
      const fieldsToPersist = {
        pharmacyId: offer.getPharmacyId(),
        ean: offer.getEan(),
        sku: offer.getSku(),
        price: offer.getPrice(),
        priceOriginal: offer.getPriceOriginal(),
        stock: offer.getStock(),
      }

      const databaseOffer = await this.client.offer.upsert({
        create: fieldsToPersist,
        update: fieldsToPersist,
        where: { id: offer.getId() ?? 0 }
      });

      if (!offer.getId()) offer.setId(databaseOffer.id);

    } catch (error) {
      console.log(error);
      await this.client.$disconnect();
    }

    return offer;
  }

  async delete(id: number): Promise<boolean> {
    await this.client.offer.delete({
			where: { id: Number(id) },
		})

    return true;
  }
}