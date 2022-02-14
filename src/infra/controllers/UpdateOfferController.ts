import { Controller } from ".";
import { UpdateOfferUseCase } from "../../domain/useCases";
import { HttpResponse } from "./Controller";

export class UpdateOfferController implements Controller {
  constructor(private readonly updateOfferUseCase: UpdateOfferUseCase) {}

  async handle(request: UpdateOfferController.Request): Promise<HttpResponse> {
    try {
      const offer = await this.updateOfferUseCase.execute(request);

      return {
        statusCode: 200,
        body: offer.toJSON()
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: error
      }
    }
  }
}

export namespace UpdateOfferController {
  export type Request = {
    id: number;
    pharmacyId: number;
    ean: string;
    sku: string;
    price: number;
    priceOriginal: number;
    stock: number;
  }
}