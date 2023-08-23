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
      <v-btn value="right" to="/reportyear"> สรุปรายปี </v-btn>
    </v-btn-toggle>
    <div>
      <!-- <div class="text-center d-flex pb-4">
        <v-btn @click="all"> all </v-btn>
        <div>{{ panel }}</div>
        <v-btn @click="none"> none </v-btn>
      </div> -->

      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel v-for="(item, i) in items" :key="i">
          <!-- <v-expansion-panel-header>Header {{ item }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content> -->
          <!-- <v-expansion-panel v-for="(item, i) in 1" :key="i"> -->
          <v-expansion-panel-header> Today </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-alert
              border="left"
              colored-border
              color="blue accent-4"
              elevation="2"
            >
              ยังไม่มียอดการเบิกและสั่งซื้อในช่วงเวลานี้
            </v-alert>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-for="(item, i) in 1" :key="i">
          <v-expansion-panel-header> yesterday </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-alert
              border="left"
              colored-border
              color="red accent-4"
              elevation="2"
            >
              ไม่มีข้อมูล
            </v-alert>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-for="(item, i) in 1" :key="i">
          <v-expansion-panel-header> 2 days ago </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-alert
              border="left"
              colored-border
              color="red accent-4"
              elevation="2"
            >
              ไม่มีข้อมูล
            </v-alert>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-for="(item, i) in 1" :key="i">
          <v-expansion-panel-header> 3 days ago </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-alert
              border="left"
              colored-border
              color="red accent-4"
              elevation="2"
            >
              ไม่มีข้อมูล
            </v-alert>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels> -->
    </div>
  </v-col>
</template>   

    


<!-- <script>
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
      headers: [
        {
          text: "ประจำเดือน",
          align: "start",
          sortable: false,
          value: "monthzone",
        },
        { text: "จำนวนการเบิกอะไหล่", value: "dayautoparts2" },
        { text: "เลือก", value: "choose2" },
      ],
      tablemonth: [],
    };
  },
};
</script> -->

<script>
export default {
  data() {
    return {
      panel: [],
      items: 1,
    };
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i);
    },
    // Reset the panel
    none() {
      this.panel = [];
    },
  },
};
</script>