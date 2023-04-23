<!-- <template>
  <v-row justify="center" align="baseline">
    <v-col cols="36" md="24" sm="12" xl="36"> </v-col>

    <v-col cols="36" md="36" sm="12">
      <v-btn
        color="primary"
        depressed
        elevation="36"
        large
        x-large
        nuxt
        to="/historybuyapart"
      >
        การแจ้งเตือน
      </v-btn>
    </v-col>
  </v-row>

  
</template> -->
<template>
  <v-col cols="12" class="py-2">
    <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
      <v-btn value="left" to="/reportday"> สรุปรายวัน </v-btn>

      <v-btn value="center" to="/reportmonth"> สรุปรายเดือน </v-btn>
    </v-btn-toggle>
    <v-data-table
      :headers="headers"
      :items="tableday"
      :items-per-page="5"
      class="elevation-2"
      density="compact"
      item-key="name"
    >
    </v-data-table>
  </v-col>

  <!-- <v-data-table
      :headers="headers"
      :items="tablemonth"
      :items-per-page="5"
      class="elevation-2"
      density="compact"
      item-key="name"
    >
    </v-data-table> -->
</template>   

    


<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "ประจำวันที่",
          align: "start",
          sortable: false,
          value: "datezone",
        },
        { text: "จำนวนการเบิกอะไหล่", value: "dayautoparts" },
        { text: "เลือก", value: "choose" },
      ],
      tableday: [],
      // headers: [
      //   {
      //     text: "ประจำเดือน",
      //     align: "start",
      //     sortable: false,
      //     value: "monthzone",
      //   },
      //   { text: "จำนวนการเบิกอะไหล่", value: "dayautoparts2" },
      //   { text: "เลือก", value: "choose2" },
      // ],
      // tablemonth: [],
    };
  },
};
</script>