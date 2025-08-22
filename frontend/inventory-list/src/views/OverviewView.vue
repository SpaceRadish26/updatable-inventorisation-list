<script setup>
import {onMounted, ref} from "vue";
import {useJsonStore} from "@/stores/jsonStore.js";

const designTab = ref(0);
const jsonStore = useJsonStore();
const data = ref([]);
const searchValue = ref('');

onMounted(async () => {
  data.value = await jsonStore.fetchJsonData();
})

const headers = [
  { title: 'Status', key: 'status' },
  { title: 'Name', key: 'name' },
  { title: 'Category', key: 'category' },
  { title: 'Location', key: 'location' },
  { title: 'Specs', key: 'specs' }, // Fixed emoji
  { title: 'Tracking', key: 'tracking' },
  { title: 'Custom Fields', key: 'customFieldsBool', sortable: false }
];

const checkYesOrNo = (value) => {
  return value === 'Yes' || value === 'yes';
}

const beautifyIndexSub = (indexSub) => {
  return indexSub.charAt(0).toUpperCase() + indexSub.slice(1).toLowerCase();
}
</script>

<template>
  <Suspense>
    <template #default>
      <div class="mainContainer">
        <v-card flat>
          <v-card-title class="d-flex align-center pe-2">
            <v-icon icon="mdi-treasure-chest-outline"></v-icon> Inventory

            <v-spacer></v-spacer>

            <v-text-field
                class="mb-4"
                v-model="searchValue"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
            ></v-text-field>
          </v-card-title>
          <v-divider></v-divider>
        <!-- Indien er foto's bijkomen -> veranderen naar v-data-table-server & store aanpassen -->
          <v-data-table
              height="500px"
              striped="even"
              fixed-header
              :search="searchValue"
              :items="data"
              :headers="headers"
              density="compact"
              item-key="name"
              class="elevation-1"
          >
            <template v-slot:item.customFieldsBool="{ item }">
              <div class="d-flex flex-wrap ga-1">
                <template v-for="(itemSub, indexSub) in item.customFieldsBool" :key="indexSub">
                  <v-chip
                      v-if="itemSub !== 'N/A'"
                      :color="checkYesOrNo(itemSub) ? 'success' : 'error'"
                      size="small"
                      variant="flat"
                      :append-icon="checkYesOrNo(itemSub) ? 'mdi-check' : 'mdi-close'"
                  >
                    {{ beautifyIndexSub(indexSub) }}
                  </v-chip>
                </template>
              </div>
            </template>
        </v-data-table>
        </v-card>
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style scoped>


.mainContainer {
  width: 80%;
  margin: 35px auto auto;
}
</style>