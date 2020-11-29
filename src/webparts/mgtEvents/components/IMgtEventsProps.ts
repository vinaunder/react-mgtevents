import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { ServiceScope } from "@microsoft/sp-core-library";

export interface IMgtEventsProps {
  themeVariant: IReadonlyTheme;
  serviceScope: ServiceScope;
}
