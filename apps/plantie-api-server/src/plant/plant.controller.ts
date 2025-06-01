import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlantService } from "./plant.service";
import { PlantControllerBase } from "./base/plant.controller.base";

@swagger.ApiTags("plants")
@common.Controller("plants")
export class PlantController extends PlantControllerBase {
  constructor(protected readonly service: PlantService) {
    super(service);
  }
}
