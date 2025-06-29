/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlantWhereUniqueInput } from "./PlantWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class PlantFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => PlantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlantWhereUniqueInput)
  @Field(() => PlantWhereUniqueInput, { nullable: false })
  where!: PlantWhereUniqueInput;
}

export { PlantFindUniqueArgs as PlantFindUniqueArgs };
