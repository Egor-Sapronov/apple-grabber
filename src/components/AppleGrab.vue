<template>
  <div>
    <header>
      <h1>Apple grabber</h1>
    </header>
    <AppToolbar
      :error="error"
      :isLoading="isLoading"
      :isActionDisabled="!canClearApples"
      @clear-apples="onClearApples"
    />
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
import AppToolbar from './AppToolbar';

export default {
  name: 'AppleGrab',
  components: {
    UserListItem,
    BasketListItem,
    AppToolbar,
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
        .catch((error) => {
          this.isLoading = false;
          this.error = error.message;
        });
    },
    onGrabApple(userId) {
      this.error = null;
      this.isLoading = true;

      grabApple(userId)
        .then(() => this.loadBasketAndUsers())
        .catch((error) => {
          this.isLoading = false;
          this.error = error.message;
        });
    },
    loadBasket() {
      return loadBasket().then(mapApples)
        .then((apples) => {
          this.apples = apples;
        });
    },
    loadUsers() {
      return loadUsers().then(mapUsers)
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
        .then((errorMessage) => {
          this.isLoading = false;
          this.error = errorMessage;
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

.row {
  display: flex;
  flex-direction: row;
}

.row .column {
  flex: 1;
  padding-right: calc(var(--base-grid-unit) * 5);
}
</style>
