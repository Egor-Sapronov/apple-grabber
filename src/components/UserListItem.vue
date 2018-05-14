<template>
  <div class="user-list-item">
    <p>{{ text }}</p>
    <StyledButton
      @click="$emit('action-click', id)"
      :disabled="disabled"
    >
      {{ actionText }}
    </StyledButton>
  </div>
</template>

<script>
export default {
  name: 'UserListItem',
  props: {
    text: {
      type: String,
      required: true,
    },
    actionText: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
