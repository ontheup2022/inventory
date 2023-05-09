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
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> Today </v-expansion-panel-header>
        <v-expansion-panel-content>555 </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> Today </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            border="left"
            colored-border
            color="deep-purple accent-4"
            elevation="2"
          >
            Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis
            ut velit. Nulla facilisi.. Morbi mollis tellus ac sapien. Fusce vel
            dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer
            hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a,
            condimentum nec, nisi.
          </v-alert>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> Today </v-expansion-panel-header>
        <v-expansion-panel-content> </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> Today </v-expansion-panel-header>
        <v-expansion-panel-content> </v-expansion-panel-content>
      </v-expansion-panel> </v-expansion-panels
  ></v-col>
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