import * as graphql from "@nestjs/graphql";
import { PlantResolverBase } from "./base/plant.resolver.base";
import { Plant } from "./base/Plant";
import { PlantService } from "./plant.service";

@graphql.Resolver(() => Plant)
export class PlantResolver extends PlantResolverBase {
  constructor(protected readonly service: PlantService) {
    super(service);
  }
}
