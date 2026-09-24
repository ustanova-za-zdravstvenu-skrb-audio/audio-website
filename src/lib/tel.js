// tel: href iz prikaznog broja (npr. "01 2305 444" -> "+38512305444")
export const telHref = (s) => {
  const d = (s || '').replace(/\D/g, '');
  return d ? '+385' + d.replace(/^0/, '') : '';
};
