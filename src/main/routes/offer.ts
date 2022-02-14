import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeCreateOfferController, makeDeleteOfferController, makeGetOfferController, makeListOffersController, makeUpdateOfferController } from '../factories';

export default async (router: Router) => {
  router.get('/offer', adaptRoute(makeListOffersController()));
  router.get('/offer/:id', adaptRoute(makeGetOfferController()));
  router.post('/offer', adaptRoute(makeCreateOfferController()));
  router.put('/offer/:id', adaptRoute(makeUpdateOfferController()));
  router.delete('/offer/:id', adaptRoute(makeDeleteOfferController()))
}