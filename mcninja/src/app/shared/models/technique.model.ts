import { Video } from "./video.model";

export interface Technique {
  id: string,
  title: string,
  belt: string,
  description: string,
  execution: string[],
  proTip: string,
  defaultTip: string,
  video: Video,
  mastered: boolean,
}
