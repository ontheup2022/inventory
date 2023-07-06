<template>
  <v-col>
    <v-data-table
      :headers="headers"
      :items="theemployee"
      :items-per-page="4"
      class="elevation-1"
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
          text: "Date",
          align: "numberemploy",
          sortable: false,
          value: "dateprice",
        },
        { text: "ชื่ออะไหล่", value: "autoparts" },
        { text: "ราคาเก่า", value: "previous" },
        { text: "ราคาปัจจุบัน", value: "pricenow" },
      ],
      theemployee: [
        {
          dateprice: "23012023",
          autoparts: "หม้อน้ำ",
          previous: "410",
          pricenow: "450",
        },
        {
          dateprice: "23012023",
          autoparts: "หม้อน้ำ",
          previous: "390",
          pricenow: "410",
        },
        {
          dateprice: "15012023",
          autoparts: "หม้อน้ำ",
          previous: "380",
          pricenow: "390",
        },
        {
          dateprice: "02012023",
          autoparts: "หม้อน้ำ",
          previous: "",
          pricenow: "380",
        },
      ],
    };
  },
};
</script>
