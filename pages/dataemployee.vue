<template>
  <v-col>
    <v-text-field
      label="Search"
      placeholder=""
      class="mdi mdi-magnify"
      filled
      rounded
      dense
    >
    </v-text-field>

    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
      to="/addemployee"
    >
      เพิ่มพนักงาน
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="theemployee"
      :items-per-page="4"
      class="elevation-1"
    >
    </v-data-table>
  </v-col>
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
    const querySnapshot = await getDocs(collection(db, "employee"));
    querySnapshot.forEach((doc) => {
      console.log(
        `${doc.id} => ${
          (doc.data().address,
          doc.data().age,
          doc.data().email,
          doc.data().nameemploy,
          doc.data().surnameemploy,
          doc.data().mobilephone)
        }`
      );
    });
  },
  data() {
    return {
      headers: [
        {
          text: "No.",
          align: "numberemploy",
          sortable: false,
          value: "name",
        },
        { text: "หมายเลขพนักงาน", value: "number" },
        { text: "ชื่อ-นามสกุล", value: "nameemployee" },
        { text: "เบอร์โทรศัพท์", value: "telemployee" },
      ],
      theemployee: [
        {
          name: "1",
          number: "00031",
          nameemployee: "ธนาธร จึงรุ่งเรืองกิจ",
          telemployee: "08046289xx",
        },
        {
          name: "2",
          number: "00032",
          nameemployee: "พิธา ลิ้มเจริญรัตน์",
          telemployee: "08057924xx",
        },
        {
          name: "3",
          number: "00033",
          nameemployee: "รังสิมันต์ โรม",
          telemployee: "08025496xx",
        },

        {
          name: "4",
          number: "00034",
          nameemployee: "วิโรจน์ ลักขณาอดิศร",
          telemployee: "080754992xx",
        },
      ],
    };
  },
};
</script>

