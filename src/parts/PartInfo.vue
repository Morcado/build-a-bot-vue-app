<template>
  <div>
    <h1>{{ path.title }}</h1>
    <div>
      {{ path.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartInfo',
  data() {
    return {
      path: {
        title: 'Part Title',
        description: 'Part Description',
      },
    };
  },
};
</script>
