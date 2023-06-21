<template>
  <h2>{{ options.length }} Items</h2>
  <a-select
    v-model:value="value"
    mode="multiple"
    style="width: 100%"
    placeholder="Please select"
    :options="options"
  />
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
const options: { value: string; disabled: boolean }[] = [];
for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    value,
    disabled: i === 10,
  });
}
export default defineComponent({
  setup() {
    const state = reactive({
      options,
      value: ['a10', 'c12'],
    });
    return state;
  },
});
</script>

