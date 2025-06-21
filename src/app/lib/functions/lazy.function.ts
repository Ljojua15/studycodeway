export const lazy = (path:string, componentName:string) =>
  () => import(path).then(m => m[componentName]);
