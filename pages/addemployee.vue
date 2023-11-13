<!--<template>
    <v-row>
      <v-col class="text-center">
        <img
          src="/v.png"
          alt="Vuetify.js"
          class="mb-5"
        >
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-row>
  </template>>-->


  <template>
  <v-form>
    <v-container>
      <div id="app">
        <div v-text-field="message in messages"></div>
      </div>

      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="ชื่อ"
            placeholder="ใส่ชื่อจริง"
            required
            v-model="message.nameemploy"
            type="text"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="นามสกุล"
            placeholder=""
            v-model="message.surnameemploy"
            type="text"
            required
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="อายุ"
            v-model="message.age"
            type="text"
            required
            solo
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="อีเมล"
            placeholder=""
            v-model="message.email"
            type="text"
            required
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="เบอร์โทรศัพท์"
            filled
            v-model="message.mobilephone"
            type="text"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="18" sm="6" md="9">
          <v-text-field
            label="ที่อยู่"
            placeholder=""
            v-model="message.address"
            type="text"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="green"
            dark
            v-bind="attrs"
            v-on="on"
            @click="updateMessage(message)"
          >
            บันทึก
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn
            class="mt-6"
            text
            color="blue"
            @click="sheet = !sheet"
            to="/dataemployee"
          >
            กลับไปที่รายชื่อ
          </v-btn>
          <div class="my-3">บันทึกไปในรายชื่อแล้ว</div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
    <!-- แสดงผลลัพธ์ -->
    <!-- <div v-if="submitted">
      <h3>ข้อมูลที่คุณกรอก</h3>
      <p>ชื่อ: {{ formData.name }}</p>
      <p>นามสกุล: {{ formData.surname }}</p>
      <p>อายุ: {{ formData.age }}</p>
      <p>อีเมล: {{ formData.email }}</p>
      <p>เบอร์โทรศัพท์: {{ formData.phone }}</p>
      <p>ที่อยู่: {{ formData.address }}</p>
    </div> -->
  </v-form>
</template>
 
<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  onSnapshot,
  collection,
  doc,
  deleteDoc,
  setDoc,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";
//import { collection, getDocs } from "firebase/firestore";
import { onUnmounted, ref, Ref } from "vue";
//import func from "vue-editor-bridge";

const firebaseConfig = {
  apiKey: "AIzaSyDIVjUdtYUvW7-noM1sXNs63CcGHtPgIyE",
  authDomain: "inventoryautoparts2023.firebaseapp.com",
  databaseURL:
    "https://inventoryautoparts2023-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "inventoryautoparts2023",
  storageBucket: "inventoryautoparts2023.appspot.com",
  messagingSenderId: "908806748326",
  appId: "1:908806748326:web:d8929d5d469ef5ffca5c67",
  measurementId: "G-7YJ2NK2FP4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// สร้าง Vue instance
export default {
  name: "addemployee",
  components: {},
  methods: {
    addNewMessage: function () {
      addDoc(collection(db, "messages"), {
        age: this.$refs.newmessage.value,
        mobilephone: this.$refs.newmessage.value,
        nameemploy: this.$refs.newmessage.value,
        surnameemploy: this.$refs.newmessage.value,
        email: this.$refs.newmessage.value,
        address: this.$refs.newmessage.value,
      });
    },
    updateMessage: function (message) {
      setDoc(doc(db, "messages", message.id), {
        age: message.age,
        mobilephone: message.mobilephone,
        nameemploy: message.nameemploy,
        surnameemploy: message.surnameemploy,
        email: message.email,
        address: message.address,
      });
    },
    deleteMessage: function (message) {
      deleteDoc(doc(db, "messages", id));
    },
  },
  data: () => {
    return {
      messages: ref([]),
      message: {
        age: "",
        mobilephone: "",
        nameemploy: "",
        surnameemploy: "",
        email: "",
        address: "",
      },
    };
  },
  mounted() {
    const latestQuery = query(collection(db, "messeges"), orderBy("date"));
    const livemessages = onSnapshot(latestQuery, (snapshot) => {
      this.messages = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          age: doc.data().age,
          mobilephone: doc.data().mobilephone,
          nameemploy: doc.data().nameemploy,
          surnameemploy: doc.data().surnameemploy,
          email: doc.data().email,
          address: doc.data().address,
          date: doc.data().date,
        };
      });
    });
    onUnmounted(livemessages);
  },
  // data() {
  //   return {
  //     formData: {
  //       name: "",
  //       surname: "",
  //       age: "",
  //       email: "",
  //       phone: "",
  //       address: "",
  //     },
  //     submitted: true,
  //   };
  // },
  // methods: {
  //   submitForm() {
  //     // ตรวจสอบข้อมูลที่กรอก
  //     if (
  //       this.formData.name &&
  //       this.formData.surname &&
  //       this.formData.age &&
  //       this.formData.email &&
  //       this.formData.phone &&
  //       this.formData.address
  //     ) {
  //       // ตั้งค่า submitted เป็น true เพื่อแสดงผลลัพธ์
  //       this.submitted = true;
  //     } else {
  //       alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
  //     }
  //   },
  //   methods: {
  //     async addData() {
  //       try {
  //         const docRef = this.$fire.firestore
  //           .collection("your_collection_path")
  //           .doc("your_document_id");
  //         await docRef.set({
  //           // ข้อมูลที่คุณต้องการเพิ่ม
  //         });
  //         console.log("Data added successfully!");
  //       } catch (error) {
  //         console.error("Error adding data:", error);
  //       }
  //     },
  //   },
  //   methods: {
  //     async updateData() {
  //       try {
  //         const docRef = this.$fire.firestore
  //           .collection("your_collection_path")
  //           .doc("your_document_id");
  //         // ทำการอัพเดทข้อมูล
  //         await docRef.update({
  //           // ข้อมูลที่คุณต้องการอัพเดท
  //         });
  //         console.log("Data updated successfully!");
  //       } catch (error) {
  //         console.error("Error updating data:", error);
  //       }
  //     },
  //   },
  //   methods: {
  //     async deleteData() {
  //       try {
  //         const docRef = this.$fire.firestore
  //           .collection("your_collection_path")
  //           .doc("your_document_id");
  //         // ทำการลบข้อมูล
  //         await docRef.delete();
  //         console.log("Data deleted successfully!");
  //       } catch (error) {
  //         console.error("Error deleting data:", error);
  //       }
  //     },
  //   },
  //   async asyncData() {
  //     try {
  //       const docRef = this.$fire.firestore
  //         .collection("your_collection_path")
  //         .doc("your_document_id");
  //       const snapshot = await docRef.get();
  //       const data = snapshot.data();
  //       return { data };
  //     } catch (error) {
  //       console.error("Error reading data:", error);
  //       return { data: null };
  //     }
  //   },
  // },
};
</script>
  
  <!-- <script>
export default {
  name: "InspirePage",
};
</script> -->
  
  
  