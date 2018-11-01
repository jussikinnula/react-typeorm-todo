export default (state: string = 'next', action: any = {}) => {
  if (!action.meta || !action.meta.location) return state;
  const type = action.type
  const prevType = action.meta.location.prev.type
  if (type === prevType) return state;
  if (type === 'LIST') return 'back';
  if (type === 'TODO' && prevType === 'LIST') return 'next';
  return state;
}
