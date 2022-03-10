/* eslint-disable no-param-reassign */
export default {
  beforeMount(el, binding) {
    if (binding.arg !== 'position') return;

    Object.keys(binding.modifiers).forEach((key) => {
      el.style[key] = '5px';
    });
    el.style.position = 'absolute';
  },
};
