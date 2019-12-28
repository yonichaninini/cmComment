export function dateFormat(date: string) {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  const hour = date.substring(11, 13);
  const minute = date.substring(14, 16);
  const date_format = year + '.' + month + '.' + day + '.' + ' ' + hour + ':' + minute;
  return date_format;
}
