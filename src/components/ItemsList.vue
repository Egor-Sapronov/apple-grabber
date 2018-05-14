<template>
  <div class="list-wrapper">
    <h2>{{ listTitle }}</h2>
    <ScrollWrapper :height="height">
      <div v-for="item in items" :key="item.id">
        <slot :id="item.id" :listItem="item" />
      </div>
    </ScrollWrapper>
  </div>
</template>

<script>
export default {
  name: 'ItemsList',
  props: {
    listTitle: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      validator(items) {
        const ids = items.map(item => item.id);
        const texts = items.map(item => item.text);

        return ids.length === items.length && texts.length === items.length;
      },
    },
    height: {
      type: Number,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-wrapper {
  padding: 16px;
}

h2 {
  font-weight: normal;
  text-align: left;
}
</style>
