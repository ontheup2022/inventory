<template>
  <v-row justify="center" align="baseline">
    <v-col cols="10" md="5" sm="6">
      <v-btn
        color="#6699FF"
        depressed
        elevation="20"
        large
        x-large
        nuxt
        to="/autoparts"
      >
        ข้อมูลอะไหล่ยนต์
      </v-btn>
    </v-col>
    <v-col cols="10" md="5" sm="6">
      <v-btn
        color="#6699FF"
        depressed
        elevation="20"
        large
        x-large
        nuxt
        to="/buyparts"
      >
        เบิกอะไหล่
      </v-btn>
    </v-col>
    <v-col cols="10" md="5" sm="6">
      <v-btn
        color="#6699FF"
        depressed
        elevation="20"
        large
        x-large
        nuxt
        to="/reportday"
      >
        สรุปรายงาน
      </v-btn>
    </v-col>
    <v-col cols="10" md="5" sm="6">
      <v-btn
        color="#6699FF"
        depressed
        elevation="20"
        large
        x-large
        nuxt
        to="/dataemployee"
      >
        ข้อมูลพนักงาน
      </v-btn>
    </v-col>
    <v-col cols="10" md="5" sm="6">
      <v-btn
        color="#6699FF"
        depressed
        elevation="20"
        large
        x-large
        nuxt
        to="/buyautoparts"
      >
        สั่งซื้ออะไหล่
      </v-btn>
    </v-col>
    <v-col cols="10" md="5" sm="6">
      <v-btn
        color="#6699FF"
        depressed
        elevation="20"
        large
        x-large
        nuxt
        to="/notifications"
      >
        การแจ้งเตือน
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>