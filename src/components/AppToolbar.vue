<template>
  <div class="toolbar">
    <div class="loader-wrapper">
      <Loader v-if="isLoading" />
    </div>
    <div class="actions">
      <ErrorMessage
        v-if="error"
        class="error-message"
      >
        {{ error }}
      </ErrorMessage>
      <StyledButton
        color="primary"
        :disabled="isActionDisabled"
        @click="$emit('clear-apples')"
      >
        Clear apples
      </StyledButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppToolbar',
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    error: {
      type: String,
    },
    isActionDisabled: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar, .actions {
  display: flex;
  flex-direction: row;
  height: 30px;
}
.toolbar {
  padding: 0 calc(var(--base-grid-unit) * 2);
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--base-grid-unit);
}
</style>
