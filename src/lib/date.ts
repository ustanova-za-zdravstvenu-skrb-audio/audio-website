// Jedinstveni format datuma za cijeli sajt: D. M. YYYY. (npr. 16. 7. 2026.).
// UTC jer su datumi novosti u frontmatteru zapisani kao datum bez vremena.
export const formatDate = (d: Date): string =>
  new Intl.DateTimeFormat('hr-HR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d);
