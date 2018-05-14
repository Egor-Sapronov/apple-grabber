<template>
  <div>
    <h1>Apple grabber</h1>
    <div class="row toolbar">
      <div class="loader-wrapper">
        <Loader v-if="isLoading" />
      </div>
      <div class="row actions">
        <ErrorMessage
          v-if="error"
          class="error-message"
        >
          {{ error }}
        </ErrorMessage>
        <StyledButton
          color="primary"
          :disabled="!canClearApples"
          @click="onClearApples"
        >
          Clear apples
        </StyledButton>
      </div>
    </div>
    <div class="row">
      <ItemsList
        class="column"
        list-title="Users"
        :height="300"
        :items="users"
      >
        <UserListItem
          slot-scope="listItemProps"
          actionText="grab apple"
          :id="listItemProps.listItem.id"
          :text="listItemProps.listItem.text"
          :disabled="!canGrabApple"
          @action-click="onGrabApple"
        />
      </ItemsList>
      <ItemsList
        class="column"
        list-title="Basket"
        :height="300"
        :items="apples"
      >
        <BasketListItem
          slot-scope="listItemProps"
          :text="listItemProps.listItem.text"
        />
      </ItemsList>
    </div>
  </div>
</template>

<script>
import loadUsers, { grabApple, clearApples, mapUsers, checkAnyUserHasApple } from '../lib/users.service';
import { getMessageFromApiError } from '../lib/http';
import loadBasket, { mapApples } from '../lib/basket.service';
import UserListItem from './UserListItem';
import BasketListItem from './BasketListItem';

export default {
  name: 'AppleGrab',
  components: {
    UserListItem,
    BasketListItem,
  },
  created() {
    this.loadBasketAndUsers();
  },
  data() {
    return {
      users: [],
      apples: [],
      isLoading: true,
      error: null,
    };
  },
  computed: {
    canGrabApple() {
      return this.apples.length > 0 && !this.isLoading;
    },
    canClearApples() {
      return !this.isLoading && checkAnyUserHasApple(this.users);
    },
  },
  methods: {
    onClearApples() {
      this.error = null;
      this.isLoading = true;

      clearApples()
        .then(() => this.loadBasketAndUsers())
        .then((ErrorMessage) => {
          this.error = ErrorMessage;
        });
    },
    onGrabApple(userId) {
      this.error = null;
      this.isLoading = true;

      grabApple(userId)
        .then(() => {
          this.loadBasketAndUsers();
        })
        .catch((error) => {
          this.error = error.message;
          this.isLoading = false;
        });
    },
    loadBasket() {
      return loadBasket()
        .then(mapApples)
        .then((apples) => {
          this.apples = apples;
        });
    },
    loadUsers() {
      return loadUsers()
        .then(mapUsers)
        .then((users) => {
          this.users = users;
        });
    },
    loadBasketAndUsers() {
      this.isLoading = true;

      return Promise.all([
        this.loadBasket(),
        this.loadUsers(),
      ])
        .then(() => {
          this.isLoading = false;
        })
        .catch(getMessageFromApiError)
        .then((ErrorMessage) => {
          this.error = ErrorMessage;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  text-align: left;
  padding: 0 calc(var(--base-grid-unit) * 2);
}

.toolbar {
  padding: 0 calc(var(--base-grid-unit) * 2);
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
  padding-bottom: var(--base-grid-unit);
}

.actions, .toolbar {
  height: 30px;
}

.row {
  display: flex;
  flex-direction: row;
}

.row .column {
  flex: 1;
  padding-right: calc(var(--base-grid-unit) * 5);
}
</style>
