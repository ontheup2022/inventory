<template>
  <div class="text-center d-flex align-center justify-space-around">
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

      <v-data-table
        :headers="headers"
        :items="thebuyparts"
        :items-per-page="5"
        class="elevation-2"
        density="compact"
        item-key="name"
      >
        <!-- <template v-slot:top>
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
                        <v-text-field
                          v-model="editedItem.name"
                          label="No."
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.calories"
                          label="หมายเลขรายการ"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.fat"
                          label="จำนวน"
                        ></v-text-field>
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
        </template> -->
        <template v-slot:item.pickup="{ item }">
          <v-btn small class="mr-2" to="/pickupautoparts">
            ทำเรื่องขอเบิก
          </v-btn>
          <v-btn small class="mr-2" to="/historybuyapart">
            ดูประวัติการเบิก และความคืบหน้า
          </v-btn>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-col>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
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
  async created() {
    console.log("test");
    const querySnapshot = await getDocs(collection(db, "autoparts"));
    querySnapshot.forEach((doc) => {
      console.log(
        `${doc.id} => ${doc.data().company}, ${doc.data().amount}, ${
          doc.data().brand
        }, ${doc.data().pricetoeach}, ${doc.data().pricetotal}`
      );
    });
  },
  data: () => ({
    // dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "No.",
        align: "numberspart",
        sortable: false,
        value: "name",
      },
      { text: "หมายเลขอะไหล่", value: "partscode" },
      { text: "รายการ", value: "listed" },
      { text: "จำนวน", value: "number" },
      { text: "ราคา/หน่วย", value: "priceaparts" },
      { text: "ราคาทั้งหมด", value: "priceapartsell" },
      { text: "เลือกเบิก", value: "pickup", sortable: false },
    ],
    thebuyparts: [],
    editedIndex: -1,
    editedItem: {
      name: 0,
      partscode: "",
      listed: "",
      number: 0,
      priceaparts: 0,
      priceapartsell: 0,
    },
    defaultItem: {
      name: 0,
      partscode: "",
      listed: "",
      number: 0,
      priceaparts: 0,
      priceapartsell: 0,
    },
  }),

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
  //   this.initialize();
  // },

  // methods: {
  //   initialize() {
  //     this.thebuyparts = [
  //       {
  //         name: "1",
  //         partscode: "174958",
  //         listed: "หัวเทียน",
  //         number: "8",
  //         priceaparts: 5000,
  //         priceapartsell: 40000,
  //       },
  //       {
  //         name: "2",
  //         partscode: "289621",
  //         listed: "ผ้าเบรก",
  //         number: "8",
  //         priceaparts: 5000,
  //         priceapartsell: 40000,
  //       },
  //       {
  //         name: "3",
  //         partscode: "473264",
  //         listed: "ท่อไอเสีย",
  //         number: "8",
  //         priceaparts: 5000,
  //         priceapartsell: 40000,
  //       },
  //     ];
  //   },

  //   editItem(item) {
  //     this.editedIndex = this.thebuyparts.indexOf(item);
  //     this.editedItem = Object.assign({}, item);
  //     this.dialog = true;
  //   },

  //   deleteItem(item) {
  //     this.editedIndex = this.thebuyparts.indexOf(item);
  //     this.editedItem = Object.assign({}, item);
  //     this.dialogDelete = true;
  //   },

  //   deleteItemConfirm() {
  //     this.thebuyparts.splice(this.editedIndex, 1);
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
  //       Object.assign(this.thebuyparts[this.editedIndex], this.editedItem);
  //     } else {
  //       this.thebuyparts.push(this.editedItem);
  //     }
  //     this.close();
  //   },
  // },
};
</script>