<template>
  <v-col>
    <v-text-field
      label="Search"
      placeholder="Dense & Rounded"
      filled
      rounded
      dense
    ></v-text-field>

    <v-btn elevation="2"> ค้นหา</v-btn>
    
    <v-data-table
      :headers="headers"
      :items="theemployee"
      :items-per-page="5"
      class="elevation-2"
      density="compact"
      item-key="name"
      cols="18"
      sm="4"
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
          text: "No.",
          align: "numbers",
          sortable: false,
          value: "name",
        },
        { text: "หมายเลขอะไหล่", value: "partscode" },
        { text: "รายการ", value: "listed" },
        { text: "จำนวน", value: "number" },
        { text: "เลือก", value: "choose" },
      ],
      theemployee: [],
    };
  },
};
</script>