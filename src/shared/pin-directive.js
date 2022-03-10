/* eslint-disable no-param-reassign */
export default {
  beforeMount(el, binding) {
    Object.keys(binding.value).forEach((position) => {
      el.style[position] = binding.value[position];
    });
    el.style.position = 'absolute';
  },
};
