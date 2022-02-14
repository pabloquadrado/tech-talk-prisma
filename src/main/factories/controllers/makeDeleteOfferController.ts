import { DeleteOfferUseCase } from '../../../domain/useCases';
import { DeleteOfferController } from '../../../infra/controllers';
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

export const makeDeleteOfferController = (): DeleteOfferController => {
  const client = new MySQLClient({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_USER_PASSWORD,
    database: DATABASE_NAME,
    port: Number(DATABASE_PORT),
    connectionLimit: Number(DATABASE_MAX_CONNECTION_POOL),
  });
  const offerRepository = new OfferRepositoryMySQL(client);
  // const offerRepository = new OfferRepositoryPrisma(prismaClient);
  const deleteOfferUseCase = new DeleteOfferUseCase(offerRepository);
  const deleteOfferController = new DeleteOfferController(deleteOfferUseCase);

  return deleteOfferController;
}