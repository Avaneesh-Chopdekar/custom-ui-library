import Box from "@/components/Layout/Box";
import Stack from "@/components/Layout/Stack";
import Text from "@/components/Text";
import Input from "@/components/Input";
import Button from "@/components/Button";

const LoginForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitted");
      }}
    >
      <Box className="px-8 py-12 border border-gray-300 rounded-xl">
        <Stack>
          <Text
            as="h2"
            weight={"bold"}
            align={"center"}
            size={"3xl"}
            className="mb-2"
          >
            Login
          </Text>

          <Text
            as="span"
            emphasis={"low"}
            size={"sm"}
            align={"center"}
            className="mb-8"
          >
            Please enter your credentials to login
          </Text>

          <Text
            as="label"
            htmlFor="username"
            size={"sm"}
            weight={"medium"}
            className="mb-1.5"
          >
            Username
          </Text>
          <Input
            type="text"
            id="username"
            placeholder="Username"
            required
            className="mb-4"
          />

          <Text
            as="label"
            htmlFor="password"
            size={"sm"}
            weight={"medium"}
            className="mb-1.5"
          >
            Password
          </Text>
          <Input
            id="password"
            type="password"
            placeholder={"Password"}
            required
          />

          <Button type="submit" variant={"solid"} className="mt-10">
            Login
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default LoginForm;
