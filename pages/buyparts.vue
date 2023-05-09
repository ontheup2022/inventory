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
        <v-text-field
          label="Search"
          placeholder=""
          class="mdi mdi-magnify"
          filled
          rounded
          dense
        >
        </v-text-field>
      </v-row>

      <!-- <v-btn
        elevation="2"
        class="ma-2"
        :loading="loading2"
        :disabled="loading2"
        color="success"
        @click="loader = 'loading2'"
      >
        Save</v-btn
      >
      <v-btn elevation="2" depressed color="error"> Cancel</v-btn> -->
      <v-btn
        elevation="2"
        class="ma-2"
        :loading="loading2"
        :disabled="loading2"
        color="success"
      >
        ค้นหา</v-btn
      >

      <!-- <v-btn
      elevation="2"
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      เพิ่ม</v-btn
    > -->
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
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-col>
  </div>
</template>

<script>
export default {
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

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.thebuyparts = [
        {
          name: "1",
          partscode: "00000001",
          listed: "wwwwww",
          number: "8",
          priceaparts: 5000,
          priceapartsell: 40000,
        },
        {
          name: "2",
          partscode: "00000002",
          listed: "wwwwww2",
          number: "8",
          priceaparts: 5000,
          priceapartsell: 40000,
        },
        {
          name: "3",
          partscode: "00000003",
          listed: "wwwwww3",
          number: "8",
          priceaparts: 5000,
          priceapartsell: 40000,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.thebuyparts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.thebuyparts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.thebuyparts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.thebuyparts[this.editedIndex], this.editedItem);
      } else {
        this.thebuyparts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>