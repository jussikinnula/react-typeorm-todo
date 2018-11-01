export default (state: boolean = false, action: any = {}) => {
  if (action.type === 'TRANSITION_START') return true;
  if (action.type === 'TRANSITION_END') return false;
  return state;
}
