import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Offer } from "../../../domain/entities";
import { OfferRepository } from "../../../domain/repositories";
import { MySQLClient } from "../../helpers";
import DeleteOffer from "./queries/DeleteOffer";
import GetOfferById from "./queries/GetOfferById";
import InsertOffer from "./queries/InsertOffer";
import ListOffers from "./queries/ListOffers";
import UpdateOffer from "./queries/UpdateOffer";

export class OfferRepositoryMySQL implements OfferRepository {
  constructor(private readonly client: MySQLClient) {}

  async list(page: number, limit: number): Promise<Offer[]> {
    const listOffersQuery = ListOffers().toString();

    const [result] = await this.client.query(listOffersQuery, {
      skip: page,
      size: limit <= 0 ? 10 : limit
    })

    return (result as RowDataPacket[]).map(
      values => new Offer(values as Offer.Properties)
    )
  }
  async getById(id: number): Promise<Offer> {
    const getOfferQuery = GetOfferById().toString();

    const [result] = await this.client.query(getOfferQuery, { id })

    return new Offer((result as RowDataPacket).shift())
  }

  async persist(offer: Offer): Promise<Offer> {
    const upsertQuery = !offer.getId()
      ? InsertOffer().toString()
      : UpdateOffer().toString();

    const [result] = await this.client.query(upsertQuery, offer.toJSON());

    if (!offer.getId()) offer.setId((result as ResultSetHeader).insertId);

    return offer;
  }

  async delete(id: number): Promise<boolean> {
    const deleteOfferQuery = DeleteOffer().toString();

    await this.client.query(deleteOfferQuery, { id });

    return true;
  }
}