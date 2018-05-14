# apple-grabber

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deploy

In [prod.env](/config/prod.env.js) you can change base API url.

If you need to setup custom static directory change assetsSubDirectory in [config](/config/index.js).

``` bash
# build for production with minification
npm run build
```

## Shared components

### ItemsList

[ItemsList](/src/components/ItemsList.vue) — is a generic way of displaying scrollable list content.
You can pass any component as a list item of this list. So ItemsList takes responsibility only for scroll and iteration over elements and you can display items as you want.

```
<ItemsList
  list-title="Super list"
  :height="300"
  :items="items"
>
  <ListItem
    slot-scope="listItemProps"
    :text="listItemProps.listItem.text"
    :disabled="someDisablingCondition"
  />
</ItemsList>
```

### StyledButton

[StyledButton](/src/components/StyledButton.vue) — just basic button themed with brand colors. It can be transparent and bordered by default or colored if 'primary' passed into the color property.

```
<StyledButton
  color="primary"
  :disabled="isDisabled"
  @click="onButtonClick"
>
  Do something great
</StyledButton>
```

### ScrollWrapper
[ScrollWrapper](/src/components/ScrollWrapper.vue) — wraps child content in scrollable section with fixed height.

```
<ScrollWrapper :height="600">
  <LongListOfItems />
</ScrollWrapper>
```

### ErrorMessage
[ErrorMessage](/src/components/ErrorMessage.vue) — wraps error into nice warning component.

```
<ErrorMessage
  v-if="error"
>
  {{ error }}
</ErrorMessage>
```

### Loader
[Loader](/src/components/ErrorMessage.vue) — use it when you need to address that something is happening now and app is not broken.

```
  <Loader v-if="isLoading" />
```
