import { VIDEO_KNOWLEDGE } from "./videoKnowledge";

export function searchVideos(message: string) {
  const lower = message.toLowerCase();

  return VIDEO_KNOWLEDGE
    .map((video) => {
      const triggerScore = video.triggers.filter((trigger) =>
        lower.includes(trigger.toLowerCase())
      ).length;

      const tagScore = video.tags.filter((tag) =>
        lower.includes(tag.toLowerCase())
      ).length;

      const score = triggerScore * 2 + tagScore;

      return {
        ...video,
        score,
      };
    })
    .filter((video) => video.score > 0)
    .sort((a, b) => b.score - a.score);
}