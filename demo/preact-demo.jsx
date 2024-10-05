import { render } from "preact";
import {
  FluentProvider,
  Button,
  Checkmark20Regular,
  webLightTheme,
} from "../bundle.js";

render(
  <FluentProvider
    theme={webLightTheme}
    className="mx-4 flex justify-center items-center p-2"
  >
    <Button icon={<Checkmark20Regular />}>Text</Button>
  </FluentProvider>,
  document.getElementById("root")
);
