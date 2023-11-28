<template>
  <v-col>
    <v-row justify="center" placeholder="">
      <!-- <v-text-field label="วันที่" v-model="picker">
          <v-date-picker v-model="picker"> </v-date-picker>
        </v-text-field>
        <v-text-field label="ยอดรวมทั้งหมด" v-model="picker">
          <v-date-picker v-model="picker"> </v-date-picker>
        </v-text-field> -->

      <v-text-field label="Search" placeholder="" filled rounded dense>
      </v-text-field>
      <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
        <v-btn value="left" to="/buyautoparts"> เพิ่มข้อมูลอะไหล่ยนต์ </v-btn>

        <v-btn value="center" to="/buyparts"> เบิกอะไหล่ </v-btn>
      </v-btn-toggle>
    </v-row>

    <v-btn
      elevation="6"
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
      to="/addautoparts"
      >เพิ่มข้อมูลอะไหล่ยนต์ใหม่</v-btn
    >
    <v-data-table
      :headers="headers"
      :items="autoparts"
      :items-per-page="5"
      class="elevation-1"
    >
      <!-- <template slot="chooseaparts" slot-scope="row">
        <td>{{ row.item.no }}</td>
        <td>{{ row.item.result }}</td>
        <td>
          <v-btn class="mx-2" fab dark small color="pink">
            <v-icon dark>แก้ไข</v-icon>
          </v-btn>
        </td>
      </template> -->
      <template v-slot:top>
        <v-toolbar flat>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <!-- <v-text-field
                        v-model="editedItem.name"
                        label="No."
                      ></v-text-field> -->
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <!-- <v-text-field
                        v-model="editedItem.calories"
                        label="หมายเลขรายการ"
                      ></v-text-field> -->
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <!-- <v-text-field
                        v-model="editedItem.fat"
                        label="จำนวน"
                      ></v-text-field> -->
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
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

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
    <!-- <v-data-table
      :headers="headers"
      :items="thebuyautoparts"
      :loading="isLoading"
      class="elevation-1"
    >
      <template v-slot:item="{ item }">
        <tr :key="item.id">
          <td>{{ item.company }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.brand }}</td>
          <td>{{ item.pricetoeach }}</td>
          <td>{{ item.pricetotal }}</td>
        </tr>
      </template> </v-data-table
    >-->

    <template v-slot:item.chooseaparts="{ item }">
      <v-btn small class="mr-2" @click="editItem(item)"> แก้ไข </v-btn>
      <v-btn small class="mr-2" @click="deleteItem(item)"> ลบออก </v-btn>
      <!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
    </template></v-col
  >
</template>
   



<script>
//import firebase from "@/path/to/firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
//import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default {
  //methods: {
  async created() {
    console.log("test");
    const querySnapshot = await getDocs(collection(db, "autoparts"));
    //this.thebuyautoparts.splice(0, this.thebuyautoparts.length);
    querySnapshot.forEach((doc) => {
      //const data = doc.data();
      // ดึงข้อมูลจากเอกสาร Firestore และผลักในอาร์เรย์ thebuyautoparts
      //console.log(this.thebuyautoparts);
      console.log(
        `${doc.id} => ${doc.data().company}, ${doc.data().amount}, ${
          doc.data().brand
        }, ${doc.data().pricetoeach}, ${doc.data().pricetotal}`
      );
      //this.thebuyautoparts.push(data);
    });
    // try {
    // } catch (error) {
    //   console.error("Error getting documents: ", error);
    // }
  },
  //},
  data() {
    return {
      headers: [
        { text: "บริษัท", value: "company" },
        { text: "จำนวน", value: "amount" },
        { text: "ยี่ห้อ", value: "brand" },
        { text: "ราคาต่อชิ้น", value: "pricetoeach" },
        { text: "ราคารวม", value: "pricetotal" },
      ],
      autoparts: [],
    };
  },
  mounted() {
    // ก่อนที่คุณจะใช้ mounted hook, ตรวจสอบว่าคุณได้ทำการติดตั้ง Firebase และกำหนดค่า Firestore ไว้แล้ว

    const db = firebase.firestore();

    // ดึงข้อมูลจาก Firestore
    db.collection("autoparts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // แปลงข้อมูลจาก Firestore เป็นรูปแบบที่ตรงกับโค้ด Vue.js ของคุณ
          const autopartsData = {
            company: doc.data().company,
            amount: doc.data().amount,
            brand: doc.data().brand,
            pricetoeach: doc.data().pricetoeach,
            pricetotal: doc.data().pricetotal,
          };

          // เพิ่มข้อมูลลงใน theemployee array
          this.autoparts.push(autopartsData);
        });
      });
  },

  // async created() {
  //   console.log("test");
  //   const querySnapshot = await getDocs(collection(db, "autoparts"));
  //   querySnapshot.forEach((doc) => {});
  // },
  // data: () => ({
  //   dialog: false,
  //   dialogDelete: false,
  //   headers: [
  //     {
  //       text: "No.",
  //       align: "numbers",
  //       sortable: false,
  //       value: "id",
  //     },
  //     { text: "วันที่สั่ง", value: "datetoorder" },
  //     { text: "ประเภทอะไหล่", value: "type" },
  //     { text: "ยี่ห้อ", value: "brand" },
  //     { text: "บริษัท", value: "company" },
  //     { text: "หน่วย", value: "unit" },
  //     { text: "ราคา", value: "price" },
  //     { text: "ยอดรวม", value: "priceallaparts" },
  //     { text: "เลือก", value: "chooseaparts", sortable: false },
  //   ],
  //   thebuyautoparts: [],
  //   editedIndex: -1,
  //   editedItem: {
  //     id: 0,
  //     datetoorder: "",
  //     company: "",
  //     priceallaparts: "",
  //   },
  //   defaultItem: {
  //     id: 0,
  //     datetoorder: "",
  //     company: "",
  //     priceallaparts: "",
  //   },
  // }),

  // computed: {
  //   formTitle() {
  //     return this.editedIndex === -1 ? "New Item" : "Edit Item";
  //   },
  // },

  // watch: {
  //   dialog(val) {
  //     val || this.close();
  //   },
  //   dialogDelete(val) {
  //     val || this.closeDelete();
  //   },
  // },
  // created() {
  //   this.loadDataFromFirestore();
  // },

  // methods: {
  //   async loadDataFromFirestore() {
  //     const querySnapshot = await getDocs(collection(db, "autoparts"));

  //     querySnapshot.forEach((doc) => {
  //       // ใส่ข้อมูลจาก Firestore ลงใน thebuyautoparts
  //       this.thebuyautoparts = [
  //         {
  //           datetoorder: "23022022",
  //           type: "หัวเทียน",
  //           brand: "Denso",
  //           unit: "5",
  //           price: "400",
  //           company: "Tenma Co.,LTD",
  //           priceallaparts: 2000,
  //         },
  //         {
  //           datetoorder: "23022022",
  //           type: "	ผ้าเบรก",
  //           brand: "Aisin Seiki",
  //           unit: "8",
  //           price: "400",
  //           company: "Tenma Co.,LTD",
  //           priceallaparts: 3200,
  //         },
  //         {
  //           datetoorder: "23022022",
  //           type: "	ท่อไอเสีย",
  //           brand: "Johnson Controls",
  //           unit: "2",
  //           price: "1800",
  //           company: "Tenma Co.,LTD",
  //           priceallaparts: 3600,
  //         },
  //       ];
  //       this.thebuyautoparts.push(doc.data());
  //     });
  //   },
  // },

  // created() {
  //   this.initialize();
  // },

  // methods: {
  //   initialize() {},

  //   editItem(item) {
  //     this.editedIndex = this.autoparts.indexOf(item);
  //     this.editedItem = Object.assign({}, item);
  //     this.dialog = true;
  //   },

  //   deleteItem(item) {
  //     this.editedIndex = this.autoparts.indexOf(item);
  //     this.editedItem = Object.assign({}, item);
  //     this.dialogDelete = true;
  //   },

  //   deleteItemConfirm() {
  //     this.thebuyautoparts.splice(this.editedIndex, 1);
  //     this.closeDelete();
  //   },

  //   close() {
  //     this.dialog = false;
  //     this.$nextTick(() => {
  //       this.editedItem = Object.assign({}, this.defaultItem);
  //       this.editedIndex = -1;
  //     });
  //   },

  //   closeDelete() {
  //     this.dialogDelete = false;
  //     this.$nextTick(() => {
  //       this.editedItem = Object.assign({}, this.defaultItem);
  //       this.editedIndex = -1;
  //     });
  //   },

  //   save() {
  //     if (this.editedIndex > -1) {
  //       Object.assign(this.autoparts[this.editedIndex], this.editedItem);
  //     } else {
  //       this.autoparts.push(this.editedItem);
  //     }
  //     this.close();
  //   },
  // },
};
</script>