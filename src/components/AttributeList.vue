<template>
<div id=attributes class="flex flex-wrap w-full">
        <div
          class="px-8 py-6 lg:w-1/4 w-1/3 border hover:shadow-lg cursor-pointer"
          :key="index"
          v-for="(attribute, index) in attributes"
          @click="select(index)"
        >
          {{ attribute }}
        </div>
      </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { get } from "../helpers/http";

export default class AttributeList extends Vue {

  protected attributes: Array<string> = [];

  async created(): Promise<void> {
    this.attributes = await get<Array<string>>("/api/remaining-attributes");
  }

  select(index: number): void {
    this.$emit('messageFromChild', this.attributes, index);
  }
}
</script>
