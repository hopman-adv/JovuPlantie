/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlantWhereUniqueInput } from "../../plant/base/PlantWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class LikeCreateInput {
  @ApiProperty({
    required: false,
    type: () => PlantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlantWhereUniqueInput)
  @IsOptional()
  @Field(() => PlantWhereUniqueInput, {
    nullable: true,
  })
  plant?: PlantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { LikeCreateInput as LikeCreateInput };
