<p>Counter: {{ counter }}</p>
<button @click="updateCounter">Update</button>

<script>
import firebaseApp from "./firebase";

export default {
  created() {
    // สร้าง reference ไปยัง counter ซึ่งเป็น root node ของ reatime database
    this.dbRef = firebaseApp.database().ref("counter");
  },

  mounted() {
    // สร้าง subscription สำหรับติดตามการเปลี่ยนแปลงของข้อมูล
    this.dbRef.on("value", (ss) => {
      console.log(ss.val());
    });
  },

  beforeDestroy() {
    // ยกเลิก subsciption เมื่อ component ถูกถอดจาก dom
    this.dbRef.off();
  },
};
</script>


