<template>
  <v-form>
    <v-container>
      <!-- <div id="app">
        <div v-text-field="message in messages"></div>
      </div> -->

      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="ชื่อ"
            placeholder="ใส่ชื่อจริง"
            required
            v-model="employee.nameemploy"
            type="text"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="นามสกุล"
            placeholder=""
            v-model="employee.surnameemploy"
            type="text"
            required
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="อายุ"
            v-model="employee.age"
            type="text"
            required
            solo
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="อีเมล"
            placeholder=""
            v-model="employee.email"
            type="text"
            required
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="เบอร์โทรศัพท์"
            filled
            v-model="employee.mobilephone"
            type="text"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="18" sm="6" md="9">
          <v-text-field
            label="ที่อยู่"
            placeholder=""
            v-model="employee.address"
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
            @click="addNewMessage()"
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
    addNewMessage: async function () {
      try {
        // Access the form data using v-model directly
        const docRef = await addDoc(collection(db, "employee"), {
          age: this.employee.age,
          mobilephone: this.employee.mobilephone,
          nameemploy: this.employee.nameemploy,
          surnameemploy: this.employee.surnameemploy,
          email: this.employee.email,
          address: this.employee.address,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
    updateMessage: function (employee) {
      setDoc(doc(db, "employee", employee.id), {
        age: employee.age,
        mobilephone: employee.mobilephone,
        nameemploy: employee.nameemploy,
        surnameemploy: employee.surnameemploy,
        email: employee.email,
        address: employee.address,
      });
    },
    deleteMessage: function (employee) {
      deleteDoc(doc(db, "employee", id));
    },
  },
  data: () => {
    return {
      employee: ref([]),
      employee: {
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
    const latestQuery = query(collection(db, "employee"), orderBy("date"));
    const livemessages = onSnapshot(latestQuery, (snapshot) => {
      this.employee = snapshot.docs.map((doc) => {
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