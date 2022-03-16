import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";

export const MilestoneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="Deadline" source="deadline" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
