<template>
  <div>
    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="light"
      @click="loader = 'loading2'"
      to="/historybuyapart"
    >
      กลับ
    </v-btn>
    <v-alert
      border="left"
      colored-border
      type="success"
      color="green accent-4"
      elevation="2"
    >
      เบิกอะไหล่เสร็จสิ้น
    </v-alert>

    <v-alert
      border="left"
      colored-border
      type="success"
      color="green accent-4"
      elevation="2"
    >
      การสั่งซื้ออะไหล่เสร็จสมบูรณ์
    </v-alert>

    <v-alert border="left" colored-border type="error" elevation="2">
      การเบิกอะไหล่ผิดพลาด
    </v-alert>
    <v-alert border="left" colored-border type="error" elevation="2">
      หัวเทียนใกล้หมด
    </v-alert>
  </div>
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