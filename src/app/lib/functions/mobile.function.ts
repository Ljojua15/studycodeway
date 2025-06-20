export function isMobile(maxWidth: number = 1024): boolean {
  return window.innerWidth <= maxWidth;
}
