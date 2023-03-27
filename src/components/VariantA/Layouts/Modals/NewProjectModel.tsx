import { Button, Group, Modal, TextInput, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function NewProjectModel(props: any) {
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      projectName: '',
      projectWBS: '',
      business: '',
    },

    validate: {
      projectName: (value: string | any[]) =>
        (value.length < 2 ? 'Project Name is too short' : null),
      projectWBS: (value: string | any[]) =>
        (value.length < 2 ? 'Project Name is too short' : null),
      business: (value: string | any[]) =>
        (value.length < 2 ? 'Business is too short' : null),
    },

  });
  return (
    <div>
      <Modal
        opened={props.opened}
        onClose={props.close}
        title="Creating New Project"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <form onSubmit={form.onSubmit((values: any) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Project Name"
            placeholder="Project Name"
            className="my-4"
            {...form.getInputProps('projectName')}
          />
          <TextInput
            withAsterisk
            label="Project WBS"
            placeholder="Project WBS"
            className="mb-4"
            {...form.getInputProps('projectWBS')}
          />
          <TextInput
            withAsterisk
            label="Business"
            placeholder="Business"
            className="mb-4"
            {...form.getInputProps('business')}
          />

          <Group position="right" mt="md">
            <Button type="submit" className="bg-[#202E61]">
              Create Project
            </Button>
          </Group>
        </form>
      </Modal>
    </div>
  );
}
