<template>
  <div>
    <v-alert
      border="left"
      colored-border
      type="success"
      color="green accent-4"
      elevation="2"
    >
      5 นาทีที่แล้ว
      <v-alert
        border="right"
        colored-border
        type="success"
        color="green accent-4"
        elevation="2"
      >
        การสั่งซื้ออะไหล่เสร็จสมบูรณ์
      </v-alert>
    </v-alert>

    <v-alert
      border="left"
      colored-border
      type="success"
      color="green accent-4"
      elevation="2"
    >
      10 นาทีที่แล้ว
      <v-alert
        border="right"
        colored-border
        type="success"
        color="green accent-4"
        elevation="2"
      >
        การสั่งซื้ออะไหล่เสร็จสมบูรณ์
      </v-alert>
    </v-alert>

    <v-alert border="left" colored-border type="error" elevation="2">
      เมื่อวานนี้
      <v-alert border="right" colored-border type="error" elevation="2">
        การเบิกอะไหล่ผิดพลาด
        <v-btn
          class="ma-2"
          :loading="loading2"
          :disabled="loading2"
          color="light"
          @click="loader = 'loading2'"
          to="/pickupautoparts"
        >
          เบิกอีกครั้ง
        </v-btn>
      </v-alert>
    </v-alert>
    <v-alert border="left" colored-border type="error" elevation="2">
      เมื่อวานนี้
      <v-alert border="right" colored-border type="error" elevation="2">
        หัวเทียนใกล้หมด
        <v-btn
          class="ma-2"
          :loading="loading2"
          :disabled="loading2"
          color="light"
          @click="loader = 'loading2'"
          to="/buyautoparts"
        >
          เพิ่มอะไหล่
        </v-btn>
      </v-alert>
    </v-alert>
  </div>
</template>

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