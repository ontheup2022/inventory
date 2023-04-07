<template>
  <v-row justify="center" align="baseline">
    <v-row justify="center" align="baseline">
      <v-col cols="36" md="24" sm="12" xl="36">
        <v-btn
          color="primary"
          depressed
          elevation="36"
          large
          x-large
          nuxt
          to="/autoparts"
        >
          ข้อมูลอะไหล่ยนต์
        </v-btn>
      </v-col>
      <v-col cols="36" md="36" sm="12">
        <v-btn
          color="primary"
          depressed
          elevation="36"
          large
          x-large
          nuxt
          to="/takeaparts"
        >
          เบิกอะไหล่
        </v-btn>
      </v-col>
      <v-col cols="36" md="36" sm="12">
        <v-btn
          color="primary"
          depressed
          elevation="36"
          large
          x-large
          nuxt
          to="/report"
        >
          สรุปรายงาน
        </v-btn>
      </v-col>
    </v-row>

    <div id="card-container"></div>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
