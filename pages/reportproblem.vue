<template>
  <v-card>
    <v-toolbar flat color="blue-grey" dark>
      <v-toolbar-title>แจ้งความประสงค์เพื่อแก้ไขระบบ</v-toolbar-title>
    </v-toolbar>

    <template v-slot:top>
      <v-toolbar flat>
        <v-dialog v-model="dialogReport" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogCancel" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <v-text-field
      filled
      label="หัวข้อเรื่อง"
      v-model="report.main"
      type="text"
      value=""
    ></v-text-field>

    <v-textarea
      filled
      label="รายละเอียด"
      v-model="report.detail"
      type="text"
      value=""
    ></v-textarea>

    <v-divider class="my-2"></v-divider>

    <v-item-group multiple selected-class="bg-purple" v-model="selectedTags">
      <div class="text-caption mb-2">Tags</div>
      <v-item v-for="tag in tags" :key="tag" v-slot="{ selectedClass, toggle }">
        <v-chip :class="selectedClass" @click="toggle">
          {{ tag }}
        </v-chip>
      </v-item>
    </v-item-group>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="error" @click="dialogDelete(item)"> ยกเลิกการแจ้ง </v-btn>
      <v-btn color="success" @click="addNewMessage()"> ส่งให้แอดมิน </v-btn>
    </v-card-actions></v-card
  >
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
const db = getFirestore(app);
// สร้าง Vue instance
export default {
  name: "reportproblem",
  components: {},
  methods: {
    addNewMessage: async function () {
      try {
        // รวบรวมข้อมูลจากทั้งหมดของ report
        const dataToSave = {
          detail: this.report.detail,
          group: this.selectedTags, // ใช้ selectedTags แทน report.group
          main: this.report.main,
        };
        const docRef = await addDoc(collection(db, "report"), dataToSave);

        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
    // ... other methods
  },
  data: () => {
    return {
      report: {
        detail: "",
        group: "",
        main: "",
      },
    };
  },
  dialogReport: false,
  selectedTags: [
    // ... รายการแท็ก
    "ข้อมูลคลาดเคลื่อน",
    "รายชื่อพนักงานไม่ถูกต้อง",
    "ไม่สามารถเบิกอะไหล่ได้",
    "ไม่สามารถสั่งซื้อได้",
    "การแจ้งเตือนผิดปกติ",
    "ลืมรหัสผ่าน",
    "ระบบมีบัคไม่ทราบสาเหตุ",
    "อื่นๆ",
  ],

  methods: {
    deleteItemConfirm() {
      this.reportproblem.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    closeDelete() {
      this.dialogReport = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.thebuyautoparts[this.editedIndex], this.editedItem);
      } else {
        this.thebuyautoparts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

