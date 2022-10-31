export const formatVideoDuration = (s: number) =>
  (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
