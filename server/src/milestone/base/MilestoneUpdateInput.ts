/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { TaskUpdateManyWithoutMilestonesInput } from "./TaskUpdateManyWithoutMilestonesInput";
@InputType()
class MilestoneUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deadline?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TaskUpdateManyWithoutMilestonesInput,
  })
  @ValidateNested()
  @Type(() => TaskUpdateManyWithoutMilestonesInput)
  @IsOptional()
  @Field(() => TaskUpdateManyWithoutMilestonesInput, {
    nullable: true,
  })
  tasks?: TaskUpdateManyWithoutMilestonesInput;
}
export { MilestoneUpdateInput };
