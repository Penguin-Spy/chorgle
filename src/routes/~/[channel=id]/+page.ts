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
    videos: [
      {
        id: 0,
        title: "video 0"
      },
      {
        id: 1,
        title: "video 1"
      }
    ]
  };
}) satisfies PageLoad;