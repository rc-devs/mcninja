// with current data (via default export and set as a variable), this template is useless...

import { Video } from "./video.model";

export interface Technique {
  id: string,
  title: string,
  belt: string,
  execution: string,
  executionSteps: string[],
  proTip: string,
  video: Video
  mastered: boolean,
}
