// Jednostavan render teksta iz CMS-a: **bold** i [tekst](url) -> HTML, uz escape.
export const fmtInline = (t) => (t || '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

// Tekst s praznim redovima -> niz HTML odlomaka.
export const paras = (t) => (t || '')
  .split(/\n\n+/)
  .map((p) => fmtInline(p.trim()))
  .filter(Boolean);
