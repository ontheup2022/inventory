<template>
  <v-col>
    <v-text-field
      label="Search"
      placeholder=""
      class="mdi mdi-magnify"
      filled
      rounded
      dense
    >
    </v-text-field>

    <v-btn elevation="2"> ค้นหา</v-btn>
    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
      to="/addemployee"
    >
      เพิ่มพนักงาน
      <!-- <template v-slot:loader>
      </template> -->
    </v-btn>
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
          text: "No.",
          align: "numberemploy",
          sortable: false,
          value: "name",
        },
        { text: "หมายเลขพนักงาน", value: "calories" },
        { text: "ชื่อ-นามสกุล", value: "nameemployee" },
        { text: "เลือก", value: "chooseemploy" },
      ],
      theemployee: [],
    };
  },
};
</script>