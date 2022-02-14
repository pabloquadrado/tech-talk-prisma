import { ListOffersUseCase } from '../../../domain/useCases';
import { ListOffersController } from '../../../infra/controllers';
import { MySQLClient, prismaClient } from '../../../infra/helpers';
import { OfferRepositoryMySQL, OfferRepositoryPrisma } from '../../../infra/providers';
import {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_USER_PASSWORD,
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_MAX_CONNECTION_POOL
} from '../../config/env'

export const makeListOffersController = (): ListOffersController => {
  const client = new MySQLClient({
    host: String(DATABASE_HOST),
    user: String(DATABASE_USER),
    password: String(DATABASE_USER_PASSWORD),
    database: String(DATABASE_NAME),
    port: Number(DATABASE_PORT),
    connectionLimit: Number(DATABASE_MAX_CONNECTION_POOL),
  });
  const offerRepository = new OfferRepositoryMySQL(client);
  // const offerRepository = new OfferRepositoryPrisma(prismaClient);
  const listOffersUseCase = new ListOffersUseCase(offerRepository);
  const listOffersController = new ListOffersController(listOffersUseCase);

  return listOffersController;
}