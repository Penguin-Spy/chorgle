import type { ParamMatcher } from '@sveltejs/kit';
 
export const match = ((param) => {
  return /^[A-Za-z0-9]+$/.test(param);
}) satisfies ParamMatcher;