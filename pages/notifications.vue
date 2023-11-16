<template>
  <div>
    <v-alert
      v-for="(notification, index) in thenotification"
      :key="index"
      :type="notification.type"
      :color="notification.color"
      :border="notification.border"
      :elevation="notification.elevation"
    >
      {{ notification.timestamp }} ที่แล้ว
      <v-alert
        v-if="notification.details"
        :type="notification.type"
        :color="notification.color"
        :border="notification.border"
        :elevation="notification.elevation"
      >
        {{ notification.details }}
        <v-btn
          class="ma-2"
          :loading="notification.loading"
          :disabled="notification.loading"
          color="light"
          @click="handleNotificationAction(notification)"
        >
          {{ notification.actionLabel }}
        </v-btn>
      </v-alert>
    </v-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thenotification: [
        {
          type: "success",
          color: "green accent-4",
          border: "left",
          elevation: "2",
          timestamp: "5 นาทีที่แล้ว",
        },
        // เพิ่มการแจ้งเตือนเพิ่มเติมตามต้องการ
      ],
    };
  },
  methods: {
    handleNotificationAction(notification) {
      // จัดการกับการกระทำสำหรับการแจ้งเตือนที่ระบุ
      // คุณสามารถใช้ข้อมูลการแจ้งเตือนเพื่อดำเนินการ
      // เช่น นำทางไปยังเส้นทางที่ระบุหรือเรียกฟังก์ชัน
      console.log(`Handling action for notification: ${notification.details}`);
    },
  },
};
</script>
