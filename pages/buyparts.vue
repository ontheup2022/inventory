<template>
  <div class="text-center d-flex align-center justify-space-around">
    <v-col cols="12" sm="6" md="3">
      <v-row justify="center" placeholder="">
        <v-text-field label="วันที่" v-model="picker">
          <v-date-picker v-model="picker"> </v-date-picker>
        </v-text-field>
      </v-row>
    </v-col>
    <v-btn elevation="2"> Save</v-btn>
    <v-btn elevation="2"> Cancel</v-btn>

    <v-data-table
      :headers="headers"
      :items="thebuyparts"
      :items-per-page="5"
      class="elevation-2"
      density="compact"
      item-key="name"
    >
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "No.",
          align: "numberspart",
          sortable: false,
          value: "name",
        },
        { text: "หมายเลขอะไหล่", value: "partscode" },
        { text: "รายการ", value: "listed" },
        { text: "จำนวน", value: "number" },
        { text: "ราคา/หน่วย", value: "priceaparts" },
        { text: "ราคาทั้งหมด", value: "priceapartsall" },
      ],
      thebuyparts: [],
    };
  },
};
</script>