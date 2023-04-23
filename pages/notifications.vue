<template>
  <v-data-table
    :headers="headers"
    :items="thenotification"
    :items-per-page="5"
    class="elevation-2"
    density="compact"
    item-key="name"
  >
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "No.",
          align: "numberemploy",
          sortable: false,
          value: "numbernoti",
        },
        { text: "การแจ้งเตือน", value: "notificationnow" },
        { text: "เลือก", value: "thechoose" },
      ],
      thenotification: [],
    };
  },
};
</script>