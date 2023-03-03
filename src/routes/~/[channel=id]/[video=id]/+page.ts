import type { PageLoad } from './$types';
 
export const load = (({ params }) => {
  return {
    channel: {
      title: "channel title",
      subscribers: 57,
      description: "channel description",
      avatar: "https://www.gravatar.com/avatar/?d=mp&f=y",
      id: params.channel
    },
    video: {
      title: "video title",
      description: `video description\n newline <span style="color:red;>test</span>"`,
      views: 84526,
      uploaded: 19532715,
      rating: {
        1: 5,
        3: 2,
        5: 12
      },
      streamUrl: "",
      id: params.video
    }
  };
}) satisfies PageLoad;