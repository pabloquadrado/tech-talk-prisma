import { UpdateOfferUseCase } from '../../../domain/useCases';
import { UpdateOfferController } from '../../../infra/controllers';
import { MySQLClient } from '../../../infra/helpers';
import { prismaClient } from '../../../infra/helpers';
import { OfferRepositoryMySQL, OfferRepositoryPrisma } from '../../../infra/providers';
import {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_USER_PASSWORD,
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_MAX_CONNECTION_POOL
} from '../../config/env'

export const makeUpdateOfferController = (): UpdateOfferController => {
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
  const updateOfferUseCase = new UpdateOfferUseCase(offerRepository);
  const updateOfferController = new UpdateOfferController(updateOfferUseCase);

  return updateOfferController;
}