<template>
  <v-form>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="24" sm="12" md="6">
            <v-text-field
              label="ประเภทอะไหล่"
              v-model="autoparts.parts"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="24" sm="12" md="6">
            <v-text-field
              label="ยี่ห้ออะไหล่"
              v-model="autoparts.brand"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="24" sm="12" md="6">
            <v-text-field
              label="บริษัท"
              placeholder=""
              v-model="autoparts.company"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="24" sm="12" md="6">
            <v-text-field
              label="หน่วย"
              placeholder=""
              v-model="autoparts.amount"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="24" sm="12" md="6">
            <v-text-field
              label="จำนวน"
              v-model="autoparts.amount"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="24" sm="12" md="6">
            <v-text-field
              label="ราคา/หน่วย"
              placeholder=""
              v-model="autoparts.pricetoeach"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <!-- <template> -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-menu
            ref="menu"
            v-model="menu"
            v-model:return-value="date"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Picker in menu"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn variant="text" color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn
                variant="text"
                color="primary"
                @click="$refs.menu.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" md="4">
          <v-dialog
            ref="dialog"
            v-model="modal"
            v-model:return-value="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Picker in dialog"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn variant="text" color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn
                variant="text"
                color="primary"
                @click="$refs.dialog.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Picker without buttons"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>

    <!-- <div class="text-center">
      
    </div> -->

    <v-container>
      <div class="text-center">
        <v-bottom-sheet v-model="sheet" persistent>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="green"
              dark
              v-bind="attrs"
              v-on="on"
              @click="addNewMessage()"
            >
              ตกลง
            </v-btn>
          </template>
          <v-sheet class="text-center" height="200px">
            <v-btn
              class="mt-6"
              text
              color="green"
              @click="sheet = !sheet"
              to="/buyautoparts"
            >
              กลับไปหน้าอะไหล่ยนต์
            </v-btn>
            <div class="py-3">บันทึกในรายการอะไหล่ยนต์แล้ว</div>
          </v-sheet>
        </v-bottom-sheet>
        <v-btn depressed color="error" to="/buyautoparts"> ยกเลิก </v-btn>
      </div>
    </v-container>
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
  name: "addautoparts",
  components: {},
  methods: {
    addNewMessage: async function () {
      try {
        // Access the form data using v-model directly
        const docRef = await addDoc(collection(db, "autoparts"), {
          amount: this.autoparts.amount,
          brand: this.autoparts.brand,
          parts: this.autoparts.parts,
          company: this.autoparts.company,
          idautoparts: this.autoparts.idautoparts,
          pricetoeach: this.autoparts.pricetoeach,
          pricetotal: this.autoparts.pricetotal,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
    updateMessage: function (autoparts) {
      setDoc(doc(db, "autoparts", autoparts.id), {
        amount: autoparts.amount,
        brand: autoparts.brand,
        parts: autoparts.parts,
        company: autoparts.company,
        idautoparts: autoparts.idautoparts,
        pricetoeach: autoparts.pricetoeach,
        pricetotal: autoparts.pricetotal,
      });
    },
    deleteMessage: function (autoparts) {
      deleteDoc(doc(db, "autoparts", id));
    },
  },
  data: () => {
    return {
      autoparts: ref([]),
      autoparts: {
        amount: "",
        brand: "",
        parts: "",
        company: "",
        idautoparts: "",
        pricetoeach: "",
        pricetotal: "",
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
    

 
