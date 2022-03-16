import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { MilestoneTitle } from "../milestone/MilestoneTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Assignee">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="milestone.id"
          reference="Milestone"
          label="Milestone"
        >
          <SelectInput optionText={MilestoneTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
