import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ApButton: typeof components.Button;
  }
}
export {};

