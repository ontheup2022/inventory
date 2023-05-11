<template>
  <v-card>
    <v-toolbar flat color="blue-grey" dark>
      <v-toolbar-title>แจ้งความประสงค์เพื่อแก้ไขระบบ</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field filled label="หัวข้อเรื่อง" value=""></v-text-field>

      <v-textarea filled label="รายละเอียด" value=""></v-textarea>

      <v-divider class="my-2"></v-divider>

      <v-item-group multiple>
        <v-subheader>Tags</v-subheader>
        <v-item v-for="n in 1" :key="n" v-slot="{ active, toggle }">

          <v-chip-group
          multiple
          active-class="primary--text"
        >
          <v-chip
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>

          <!-- <v-chip
            active-class="purple--text"
            :input-value="active"
            @click="toggle"
          >
            Tag {{ tags }}
          </v-chip> -->
        </v-item>
      </v-item-group>
    </v-card-text>

    <v-divider></v-divider>

    <template v-slot:top>
      <v-toolbar flat>
        <v-dialog v-model="dialogReport" max-width="500px">
          <v-card>
            <v-card-title v-model="dialogReport" class="text-h5"
              >รายงานปัญหาให้กับแอดมินเรียบร้อย</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <!-- <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                > -->
              <v-btn color="blue darken-1" text>OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="dialogReport"> ส่งให้แอดมิน </v-btn>
    </v-card-actions></v-card
  >
</template>


<script>
export default {
  data: () => ({
    //dialog: false,
    //dialogReport: false,
    // headers: [
    //   {
    //     text: "No.",
    //     align: "numbers",
    //     sortable: false,
    //     value: "name",
    //   },
    //   { text: "วันที่สั่ง", value: "datetoorder" },
    //   { text: "บริษัท", value: "company" },
    //   { text: "ยอดรวม", value: "priceallaparts" },
    //   { text: "เลือก", value: "chooseaparts", sortable: false },
    // ],
    // thebuyautoparts: [],
    // editedIndex: -1,
    // editedItem: {
    //   name: 0,
    //   datetoorder: "",
    //   company: "",
    //   priceallaparts: "",
    // },
    // defaultItem: {
    //   name: 0,
    //   datetoorder: "",
    //   company: "",
    //   priceallaparts: "",
    // },
  }),

  //   computed: {
  //     formTitle() {
  //       return this.editedIndex === -1 ? "New Item" : "Edit Item";
  //     },
  //   },

  //   watch: {
  //     dialog(val) {
  //       val || this.close();
  //     },
  //     dialogDelete(val) {
  //       val || this.closeDelete();
  //     },
  //   },

  //   created() {
  //     this.initialize();
  //   },

  methods: {
    //     initialize() {
    //       this.thebuyautoparts = [
    //         {
    //           name: "1",
    //           datetoorder: "23022022",
    //           company: "vfbfgngfnfg",
    //           priceallaparts: 3200,
    //         },
    //         {
    //           name: "2",
    //           datetoorder: "23022022",
    //           company: "vfbfgngfnfg",
    //           priceallaparts: 3600,
    //         },
    //         {
    //           name: "3",
    //           datetoorder: "23022022",
    //           company: "vfbfgngfnfg",
    //           priceallaparts: 3500,
    //         },
    //       ];
    //     },

    // editItem(item) {
    //   this.editedIndex = this.thebuyautoparts.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialog = true;
    // },

    // deleteItem(item) {
    //   this.editedIndex = this.thebuyautoparts.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialogDelete = true;
    // },

    deleteItemConfirm() {
      this.reportproblem.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    // close() {
    //   this.dialog = false;
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem);
    //     this.editedIndex = -1;
    //   });
    // },

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

<script>
  export default {
    data: () => ({
      tags: [
        'ข้อมูลคลาดเคลื่่อน',
        'รายชื่อพนักงานไม่ถูกต้อง',
        'ไม่สามารถเบิกอะไหล่ได้',
        'ไม่สามารถสั่งซื้อได้',
        'การแจ้งเตือนผิดปกติ',
        'ลืมรหัสผ่่าน',
        'ระบบมีบัคไม่ทราบสาเหตุ',
        'อื่นๆ',
      ],
    }),
  }
</script>