import { container } from "tsyringe";
import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsDateProviders } from "./DateProvider/implementations/DayjsDateProviders";

container.registerSingleton<IDateProvider>(
  "DayjsDateProviders",
  DayjsDateProviders
)
