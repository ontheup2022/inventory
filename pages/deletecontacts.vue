<template>
  <v-col cols="12" sm="10" md="4">
    <v-text-field
      label="Filled"
      placeholder="Dense & Rounded"
      filled
      rounded
      dense
    >
    </v-text-field>
    <v-btn elevation="2"> ค้นหา</v-btn>
    <v-btn elevation="2"> เพิ่มพนักงาน</v-btn>
    <v-data-table
      :headers="headers"
      :items="theemployee"
      :items-per-page="5"
      class="elevation-2"
      density="compact"
      item-key="name"
    >
    </v-data-table>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      theemployee: [],
    };
  },
};
</script>