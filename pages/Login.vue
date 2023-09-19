<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Sign In</h3>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>
      <form>
        <v-layout column>
          <v-flex>
            <v-text-field
              name="email"
              label="Email"
              id="email"
              type="email"
              required
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name="password"
              label="Password"
              id="password"
              type="password"
              required
            ></v-text-field>
          </v-flex>

          <v-flex class="text-xs-center" mt-5>
            <v-btn primary type="submit">Login</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import { db } from "~/plugins/firebaseConfig.js";
import firebase from "firebase/app";

export default {
  data: function () {
    return {
      name: "",
      label: "",
      id: "",
      type: "",
      //   rating: 3,
      //   slider: 20,
    };
  },
  methods: {
    addData() {},
    addData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      var data = {
        name: this.name,
        label: this.label,
        id: this.id,
        type: this.type,
        // rating: this.rating,
        // slider: this.slider,
      };
      db.collection("MyForm")
        .doc("formdata")
        .set(data)
        .then(function () {
          console.log("Document successfully written! -> MyForm");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      var dataText = {
        txt: this.txt,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function () {
          console.log("Document successfully written! -> MyText");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
    addData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      var data = {
        name: this.name,
        label: this.label,
        id: this.id,
        type: this.type,
        // txt: this.txt,
        // checkbox: this.checkbox,
        // radioGroup: this.radioGroup,
        // switcher: this.switcher,
        // rating: this.rating,
        // slider: this.slider,
      };
      db.collection("MyForm")
        .doc("formdata")
        .set(data)
        .then(function () {
          console.log("Document successfully written! -> MyForm");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      var dataText = {
        txt: this.txt,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function () {
          console.log("Document successfully written! -> MyText");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
    reset() {},
  },
};
</script>