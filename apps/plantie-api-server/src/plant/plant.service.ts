import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlantServiceBase } from "./base/plant.service.base";

@Injectable()
export class PlantService extends PlantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
